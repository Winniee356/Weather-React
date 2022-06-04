import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
      </div>
      <small>
  <a href="https://github.com/Winniee356/Weather-React" rel="noreferrer" target="_blank">Open-soured on Github </a>
       by Winnie Lam 
          </small>
    </div>
  );
}

export default App;
