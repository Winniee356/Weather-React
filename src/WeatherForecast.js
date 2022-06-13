import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                <div className="WeatherForecast-day">Tue</div>
                <WeatherIcon code="01d" />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">21</span>/
                    <span className="WeatherForecast-temperature-min">12</span>
                    </div>
                </div>
            </div>
        </div>
    );
}