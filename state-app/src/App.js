import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContainer from './components/AppContainer';

function App() {
  // !! Parent Container added so all references to Person are not in `AppContainer.jsx`
  // let age1 = 21;
  // let age2 = 30;
  // let name1 = "Autumn";
  // let name2 = "Kevin";
  // alert(`The initial name and age of the first person is ${age1} ${name1}\nThe initial name and age of the second person is ${age2} ${name2}`)
  return (
    <div className="App">
      <h1>Lifting State Lecture 03-13-2020</h1>
      <AppContainer/>
      {/* <Person name = {name1} age = {age1}/>
      <Person name = {name2} age = {age2}/> */}
    </div>
  );
}

export default App;
