import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }


    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                    <WeatherForecastDay data={forecast[0]}/>
                    </div>
                </div>
            </div>
  );
    } else {
let apiKey = "5d58dab7c52bc5b6821b6be77d25d60e";
let longtitude = props.coord.lon;
let latitude = props.coord.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(handleResponse);

return null;
      
    }
   
}