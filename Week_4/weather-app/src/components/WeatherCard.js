import React from "react";
import "../styles/WeatherCard.css"
import logo from '../icons/01d.svg'

function WeatherCard(props) {
    return (
        <div class="card">
            <div class="card-top">
                {props.weatherData.date}
            </div>
            <div class="card-body">
                <img src={logo}></img>
            </div>
            <p class="card-bottom">
                {Math.round(props.weatherData.minTemp)}° to {Math.round(props.weatherData.maxTemp)}°
            </p>
        </div>
    )
}

export default WeatherCard;