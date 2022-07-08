import React, { useState } from 'react';
import './App.css';
import SingleCallView from './components/MetaData';
import Header from './components/Header';
import Tags from './components/Tags';
import Transcript from './components/Transcript';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SingleCallView />
        <Tags />
        <Transcript />
        <Note />
      </div>
    </div>
  );
}

export default App;
