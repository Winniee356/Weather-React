import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
          <input type="search"placeholder="Enter a city" className="form-control"/>
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-secondary"/>
          </div>
          </div>
        </form>
      <h1>Amsterdam</h1>
        <ul>
          <li>
           Saturday 18:00
          </li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
            23°C
          </div>
          <div className="col-6">
          <ul>
              <li>Precipitation: 5%</li>
              <li>Humidity:10%</li>
              <li>Wind: 11 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}