import React, { useEffect, useState } from 'react';
import './App.css';
import MetaData from './components/MetaData';
import Header from './components/Header';
import Tags from './components/Tags';
import Transcript from './components/Transcript';
import Note from './components/Note';

function App() {
  const [expand, setExpand] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [apiData, setApiData] = useState({});
  const [tags, setTags] = useState([]);
  const [violations, setViolations] = useState([]);
  const [transcript, setTranscript] = useState([]);

  const accessToken =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5qVkRRMEZGT1RrMlJqTkZNVGc1TXpFNE5UQkRRalF5UTBZek5URkVRMEpGTkRSRVJVRXlOQSJ9.eyJodHRwczovL3ZvaW50ZWxsLnByb2RpZ2FsdGVjaC5jb20vdGVuYW50IjoiZGV2IiwiaHR0cHM6Ly92b2ludGVsbC5wcm9kaWdhbHRlY2guY29tL3JlZ2lvbiI6IlVTIiwiaHR0cHM6Ly92b2ludGVsbC5wcm9kaWdhbHRlY2guY29tL2FwcFJvbGVzIjpbIl9fYWxsX18iXSwiaHR0cHM6Ly92b2ludGVsbC5wcm9kaWdhbHRlY2guY29tL2VtYWlsIjoic2F1bXlhLnZlcm1hQHByb2RpZ2FsdGVjaC5jb20iLCJodHRwczovL3ZvaW50ZWxsLnByb2RpZ2FsdGVjaC5jb20vY2xhaW1zL3Blcm1pc3Npb25zIjpbInZvaWNlX2Rhc2hib2FyZCIsInN1cGVyYWRtaW4iLCJlZGl0X3RhZ3MiLCJlZGl0X3NtYXJ0cmVwb3J0IiwiZWRpdF9zY29yZWNhcmQiLCJhZ2dyZWdhdGVfc2NvcmVjYXJkIiwiYWRtaW4iLCJ2aXN1YWxzIiwicHJvbm90ZXNfYXVkaW8iLCJ2aWV3X3RhZ3MiLCJhZGRfY3VzdG9tX3RhZ3MiLCJkZWxldGVfY3VzdG9tX3RhZ3MiLCJhZGRfc3lzdGVtX3RhZ3MiLCJkZWxldGVfc3lzdGVtX3RhZ3MiLCJmZWVkYmFja190YWdzIiwiZWRpdF9ub3RlcyIsImV4cG9ydF9hdWRpb19jYWxscyIsImV4cG9ydF9kYXRhX2NhbGxzIiwiZXhwb3J0X3RyYW5zY3JpcHRfY2FsbHMiLCJ2aWV3X3NtYXJ0cmVwb3J0cyIsImVkaXRfc21hcnRyZXBvcnRzIiwidmlld192aXN1YWxzIiwidXNlcmxpc3RfYWRtaW4iLCJzY29yZWNhcmRidWlsZGVyX2FkbWluIiwibWFuYWdldGFnc19hZG1pbiIsImdsb2JhbGNvbmZpZ19hZG1pbiIsInZpZXdfc2NvcmVjYXJkcyIsImVkaXRfc2NvcmVjYXJkcyIsImV4cG9ydF9yZXZpZXdzY29yZWNhcmRzIiwiYXBwcm92ZV9yZXZpZXdzY29yZWNhcmRzIiwiZXhwb3J0X2FnZ3JlZ2F0ZXNjb3JlY2FyZHMiLCJ1c2VycGVybWlzc2lvbl9hZG1pbiIsImluZ2VzdGlvbl9tb25pdG9yaW5nIiwidmlld19zb3VyY2VfbWFwcGVyIiwiZWRpdF9zb3VyY2VfbWFwcGVyIl0sImh0dHBzOi8vYWdlbnQtYXBwLnByb2RpZ2FsdGVjaC5jb20vYWdlbnREZXRhaWxzIjp7Im9yZ2FuaXNhdGlvbiI6InByb2RpZ2FsIiwiYWdlbnRJZCI6IlNBVU1ZQSIsIm5hbWUiOiJTQVVNWUEiLCJjdXN0b21NZXRhZGF0YSI6IlNTIiwibm90ZUhpc3RvcnlUeXBlIjoiQVVUTyIsIm5vdGVIaWdobGlnaHRUaHJlc2hvbGQiOjcsImlzTm90ZXNBbGVydEFsbG93ZWQiOnRydWUsImFsbG93ZWRSb29tcyI6WyJ0ZXN0Il0sInJvb20iOiJ0ZXN0IiwiZGlzcGxheU1ldGFkYXRhTWFwIjp7ImNhbGxEaXJlY3Rpb24iOnsidHlwZSI6InN0cmluZyJ9LCJjYWxsRHVyYXRpb24iOnsidHlwZSI6InN0cmluZyJ9LCJhZ2VudEluaXRpYWxzIjp7InR5cGUiOiJzdHJpbmcifSwicGhvbmVOdW1iZXIiOnsidHlwZSI6InN0cmluZyJ9LCJjdXN0b21NZXRhZGF0YSI6eyJ0eXBlIjoic3RyaW5nIn19LCJzaG91bGRTaG93Q29kZURyb3Bkb3ducyI6dHJ1ZSwiZWRpdGFibGVBY2NvdW50TnVtYmVyIjp0cnVlLCJtYW5kYXRvcnlBY2NvdW50TnVtYmVyIjpmYWxzZSwic2hvdWxkU2hvd1F1aWNrTm90ZXMiOmZhbHNlLCJpc05vdGVIaXN0b3J5RW5hYmxlZCI6dHJ1ZSwiaXNMZWFkZXJib2FyZHNFbmFibGVkIjp0cnVlLCJpc05vdGVzR2FtaWZpY2F0aW9uRW5hYmxlZCI6dHJ1ZSwiaXNDYWxsSG91cnNHYW1pZmljYXRpb25FbmFibGVkIjp0cnVlLCJwb3dlcnRveXNIb3RrZXlzRW5hYmxlZCI6dHJ1ZSwibGlua1RvRml4QXVkaW9Jc3N1ZXMiOiJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLRkNWN0pOR1dDVzJBc0c0VjFpcXBKNWliWGhtczZQWS92aWV3IiwidGhyZXNob2xkVGltZVRvU3VibWl0Tm90ZSI6NX0sImh0dHBzOi8vYWdlbnQtYXBwLnByb2RpZ2FsdGVjaC5jb20vc3VwZXJ2aXNvclN1YnNjcmlwdGlvbnMiOltdLCJodHRwczovL3ZvaW50ZWxsLnByb2RpZ2FsdGVjaC5jb20vdHJhY2tVc2VyT25GUyI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vYXV0aC5wcm9kaWdhbHRlY2guY29tLyIsInN1YiI6ImF1dGgwfDYxZWU0N2Q1ZjQ4N2Q0MDA3MGIzZDQyNCIsImF1ZCI6Imh0dHBzOi8vdm9pbnRlbGwucHJvZGlnYWx0ZWNoLmNvbSIsImlhdCI6MTY2MTAzMTQxOSwiZXhwIjoxNjYxMTE3ODE5LCJhenAiOiJTUXA4M3R6cnJYSEFHMkFaTDRlN083UzBnYmszQUx6TyIsInNjb3BlIjoiIiwicGVybWlzc2lvbnMiOltdfQ.SCUr0Uo3nFcrwVjA0eBbzL1kFaYV95PNrdvIpqCtv0cB_iZmvBVuqlH8qM4WZ0nO9FDGYxn8_lnKSsmmW1IZZU4NQ1J74rNmRRz3T1dIxSZsnBnD7HXWNyQW3ocZGqHmUcD3vYeVYPTCngxztKTUoSkm_QRQpVh5dTZ5WwCaQWl_cGL_uVStNDlVi_GC5EX9L7OrEeshXnzel-5Ny3S-f8Z9PBGcRReRQifgi95FuApKORk9R2I2iVamRANWNm5sHMizfeYvwn1dQsgmFeF7bRd33lrhmHNaGuxwuKJvNIDE7yhivW1H7URF9r2ifzEjcHP2hHSu-c2NirX_4k4ZoA';
  localStorage.setItem('access_token', accessToken);
  const access = localStorage.getItem('access_token');

  const anotherCall = 'b6b578b9-b0e7-401c-9fbf-aee0ea97e85f';
  // f6608c32-c117-4508-aca0-1b413462e972
  // 052ce1a0-8e52-42e2-a79a-6696f66e265d

  useEffect(() => {
    fetch(
      'https://api-server.prodigaltech.com:5050/singleCallDetailV2/052ce1a0-8e52-42e2-a79a-6696f66e265d',
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setViolations(data.violations);
        setTranscript(data.transcript);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch('https://api-server.prodigaltech.com:5050/tags_v3/', {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTags(data.data.unique_tags))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div>
          <Header />
        </div>
        <div className="base">
          {expand ? (
            <></>
          ) : (
            <>
              {console.log(apiData)}
              {apiData ? <MetaData apiData={apiData} /> : null}
              {apiData ? <Tags apiData={apiData} /> : null}
            </>
          )}
          <Transcript
            transcript={transcript}
            expand={expand}
            violations={violations}
            setExpand={() => setExpand(!expand)}
          />
        </div>
        <div>
          <Note />
        </div>
      </div>
    </div>
  );
}

export default App;
