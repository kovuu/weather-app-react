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
                    <span className="label">Город</span>
                    <span className="value">{city}</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Скорость ветра</span>
                    <span className="value">{wind} км/ч</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Давление</span>
                    <span className="value">{pressure} мм.рт.cт</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Влажность</span>
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
