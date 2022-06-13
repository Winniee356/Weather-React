import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                Tue
                <WeatherIcon code="01d" />
                21/12
                </div>
            </div>
        </div>
    );
}