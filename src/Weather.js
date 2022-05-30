import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [load, setload] = useState(false);
  let [weather, setWeather] = useState();

  function showWeather(response) {
    setload(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5d58dab7c52bc5b6821b6be77d25d60e`;
    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (load) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Temperature: {Math.round(weather.temperature)}°C
          </li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img
              src={weather.icon}
              alt={weather.description}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}