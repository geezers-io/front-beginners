import React from 'react';
import './App.js';
import Trailer from './Trailer';

function App() {
  return (
    <div className="App">
      <h1>Movie Trailer</h1>
      <Trailer title="Movie Title" trailerCode="YourTrailerCode" />
    </div>
  );
}

export default App;
