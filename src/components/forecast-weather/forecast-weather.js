import React from "react";
import "./forecast-weather.css";
import { useState } from "react";

export var ForecastWeather = ({data}) => {

    const [firstDisplayIndex, setFirstDisplayIndex] = useState(0)

    const handlePreviousOnClick = () => {
        setFirstDisplayIndex((previous) => (previous > 7)? previous-8 : 0)
    }

    const handleNextOnClick = () => {
        setFirstDisplayIndex((previous) => (previous < 23)? previous+8 : 31)
    }
    console.log(data.list[0])
    return (
        <div className="forecast">
            <div className="top">
                <button className="previous-button" onClick={handlePreviousOnClick}>&lt;</button>
                <div className="forecast-container">
                    <div className="datetime">
                        <span className="date"> {data.list[firstDisplayIndex].dt_txt.substring(8,10)}/{data.list[firstDisplayIndex].dt_txt.substring(5,7)} </span>
                        <span className="time"> {data.list[firstDisplayIndex].dt_txt.substring(11,16)} </span>
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">{Math.round(data.list[firstDisplayIndex].main.temp)}°C</div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data.list[firstDisplayIndex].weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <div className="forecast-container">
                    <div className="datetime">
                        <span className="date"> {data.list[firstDisplayIndex+1].dt_txt.substring(8,10)}/{data.list[firstDisplayIndex+1].dt_txt.substring(5,7)} </span>
                        <span className="time"> {data.list[firstDisplayIndex+1].dt_txt.substring(11,16)} </span>
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">{Math.round(data.list[firstDisplayIndex+1].main.temp)}°C</div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data.list[firstDisplayIndex+1].weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <div className="forecast-container">
                    <div className="datetime">
                        <span className="date"> {data.list[firstDisplayIndex+2].dt_txt.substring(8,10)}/{data.list[firstDisplayIndex+2].dt_txt.substring(5,7)} </span>
                        <span className="time"> {data.list[firstDisplayIndex+2].dt_txt.substring(11,16)} </span>
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">{Math.round(data.list[firstDisplayIndex+2].main.temp)}°C</div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data.list[firstDisplayIndex+2].weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <div className="forecast-container">
                    <div className="datetime">
                        <span className="date"> {data.list[firstDisplayIndex+3].dt_txt.substring(8,10)}/{data.list[firstDisplayIndex+3].dt_txt.substring(5,7)} </span>
                        <span className="time"> {data.list[firstDisplayIndex+3].dt_txt.substring(11,16)} </span>
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">{Math.round(data.list[firstDisplayIndex+3].main.temp)}°C</div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data.list[firstDisplayIndex+3].weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="forecast-container">
                    <div className="datetime">
                        <span className="date"> {data.list[firstDisplayIndex+4].dt_txt.substring(8,10)}/{data.list[firstDisplayIndex+4].dt_txt.substring(5,7)} </span>
                        <span className="time"> {data.list[firstDisplayIndex+4].dt_txt.substring(11,16)} </span>
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">{Math.round(data.list[firstDisplayIndex+4].main.temp)}°C</div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data.list[firstDisplayIndex+4].weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <div className="forecast-container">
                    <div className="datetime">
                        <span className="date"> {data.list[firstDisplayIndex+5].dt_txt.substring(8,10)}/{data.list[firstDisplayIndex+5].dt_txt.substring(5,7)} </span>
                        <span className="time"> {data.list[firstDisplayIndex+5].dt_txt.substring(11,16)} </span>
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">{Math.round(data.list[firstDisplayIndex+5].main.temp)}°C</div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data.list[firstDisplayIndex+5].weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <div className="forecast-container">
                    <div className="datetime">
                        <span className="date"> {data.list[firstDisplayIndex+6].dt_txt.substring(8,10)}/{data.list[firstDisplayIndex+6].dt_txt.substring(5,7)} </span>
                        <span className="time"> {data.list[firstDisplayIndex+6].dt_txt.substring(11,16)} </span>
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">{Math.round(data.list[firstDisplayIndex+6].main.temp)}°C</div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data.list[firstDisplayIndex+6].weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <div className="forecast-container">
                    <div className="datetime">
                        <span className="date"> {data.list[firstDisplayIndex+7].dt_txt.substring(8,10)}/{data.list[firstDisplayIndex+7].dt_txt.substring(5,7)} </span>
                        <span className="time"> {data.list[firstDisplayIndex+7].dt_txt.substring(11,16)} </span>
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">{Math.round(data.list[firstDisplayIndex+7].main.temp)}°C</div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data.list[firstDisplayIndex+7].weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <button className="next-button" onClick={handleNextOnClick}>&gt;</button>
            </div>
        </div>
    )
}