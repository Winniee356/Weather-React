import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    temperature:response.data.main.temp,
    date: new Date(response.data.dt*1000),
    description:response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity:response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
  })
}

function handleSubmit(event) {
  event.preventDefault();
  // search for a city
}

if (weatherData.ready) {
  return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
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
      <WeatherInfo data={weatherData}/>
      </div>
    );
  } else {
    const apiKey = "5d58dab7c52bc5b6821b6be77d25d60e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }


}