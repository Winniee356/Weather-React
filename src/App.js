import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App </h1>
        <Weather/>
      </div>
      <small>
  <a href="https://github.com/Winniee356/Weather-React" rel="noreferrer" target="_blank">Open soured code </a>
       by Winnie Lam 
          </small>
    </div>
  );
}

export default App;
