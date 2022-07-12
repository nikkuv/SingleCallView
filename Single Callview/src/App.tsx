import React, { useState } from 'react';
import './App.css';
import SingleCallView from './components/MetaData';
import Header from './components/Header';
import Tags from './components/Tags';
import Transcript from './components/Transcript';
import Note from './components/Note';

function App() {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="container">
        <Header />
        {expand ? (
          <></>
        ) : (
          <>
            <SingleCallView />
            <Tags />
          </>
        )}
        <Transcript expand={expand} setExpand={() => setExpand(!expand)} />
        <Note />
      </div>
    </div>
  );
}

export default App;
