import React from "react";
import  './Forecast.css';

const Forecast = ({forecasts}) => {

    return (
        <div>
        <h1 style={{textAlign: 'center'}}>Forecast</h1>
        {forecasts.map((forecast, index) => {
            return (
                <div className="content-module" key={index}>
                    <div className="weather-wrapper content-module">
                        <div className="weather-card">
                            <div className="item-container">
                                <div className="item-card-header">
                                    <div>
                                        <h2 className="date">
                                            <span>{forecast.hours}</span>
                                            <span className="sub">
                                                {forecast.day}
                                        </span>
                                        </h2>
                                        <img alt="test" className="weather-icon icon" src={`http://openweathermap.org/img/wn/${forecast.icon}@2x.png`}/>
                                    </div>
                                    <div className="temp metric">
                                        {forecast.temp}°
                                    </div>
                                    <span className="phrase">
                                        {forecast.weather}
                                </span>
                                    <div className="precip">
                                        <img alt="test"
                                             src="https://www.accuweather.com/images/components/weather/hourly-card-nfl/drop-icon.svg"
                                             className="precip-icon"/>
                                        {forecast.pop}%
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
            })}


        </div>
    )
}

export default Forecast;
