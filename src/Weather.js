import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
          <input type="search"placeholder="Enter a city" className="form-control"
          autoFocus="on"/>
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-secondary w-100"/>
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
            < div className="clearfix mt-3">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" className="float-left"/>
                <span className="temperature" >23</span>
                <span className="unit">°C</span>
            </div>
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