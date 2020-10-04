import React from "react";
import './CurrentWeather.css';

const CurrentWeather = () => (
    <div className="current-weather-block">
        <div className="weather-block-card">
            <div className="weather-card-panel">
                <h2 className="weather-card-title">Current Weather</h2>
                <p className="weather-card-time">14:57</p>
                <div className="forecast-container">
                    <img alt="123" className="weather-icon" src="https://www.accuweather.com/images/weathericons/06.svg"/>
                    <div className="temp-container">
                        <div className="temp">
                            22°
                            <span className="after-temp">C</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-card-panel details-container">
                <div className="spaced-content detail">
                    <span className="label">Город</span>
                    <span className="value">Krasnodar</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Скорость ветра</span>
                    <span className="value">4.1 км/ч</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Давление</span>
                    <span className="value">1012 мм.рт.cт</span>
                </div>
                <div className="spaced-content detail">
                    <span className="label">Влажность</span>
                    <span className="value">81%</span>
                </div>
            </div>

        </div>
        <div className="spaced-content">
            <span className="phrase">Mostly cloudy</span>
        </div>
    </div>
)

export default CurrentWeather;
