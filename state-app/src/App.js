import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <h1>Lifting State Lecture 03-13-2020</h1>
      <Person name = "Autumn" age = "21"/>
      <Person name = "Keivn" age = "30"/>
    </div>
  );
}

export default App;
