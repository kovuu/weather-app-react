import React from "react";
import './CurrentWeather.css';

const CurrentWeather = ({ temp, time, city, humidity, wind, pressure, icon, weather }) => (
    <div className="current-weather-block">
        <div className="weather-block-card">
            <div className="weather-card-panel">
                <h2 className="weather-card-title">Current Weather</h2>
                <p className="weather-card-time">{time}</p>
                <div className="forecast-container">
                    {icon && <img alt="123" className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>}
                    <div className="temp-container">
                        <div className="temp">
                            {temp}°
                            <span className="after-temp">C</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-card-panel details-container">
                <div className="spaced-content detail">
                    <span className="label">City</span>
                    <span className="value">{city}</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Wind</span>
                    <span className="value">{wind} km/h</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Pressure</span>
                    <span className="value">{pressure} mmHg</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Humidity</span>
                    <span className="value">{humidity}%</span>
                </div>
            </div>

        </div>
        <div className="spaced-content">
            <span className="phrase">{weather}</span>
        </div>
    </div>
)

export default CurrentWeather;
