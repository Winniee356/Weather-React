import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    function handleResponse(response) {
        console.log(response.data);
    }
console.log(props);



    if (loaded) {
        let apiKey = "5d58dab7c52bc5b6821b6be77d25d60e";
        let longtitude = props.coord.lon;
        let latitude = props.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`

        axios.get(apiUrl).then(handleResponse);

        return null;
    } else {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                    <div className="WeatherForecast-day">Tue</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">21°</span>/
                        <span className="WeatherForecast-temperature-min">12°</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
   
}