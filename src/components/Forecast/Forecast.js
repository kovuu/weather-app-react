import React from "react";
import  './Forecast.css';
import {Col, Row} from "antd";
import 'antd/dist/antd.css';



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
            <Row gutter={16} align={'middle'} justify="space-between" className="item-card-header">
                <Col className="gutter-row">
                    <h2 className="date">
                        {!forecast.units && <span>{forecast.hours}:00</span>}
                        <span className="sub">
                                                {forecast.day}
                        </span></h2>
                </Col>
                <Col className="gutter-row" >
                    <img alt="test" className="weather-icon icon" src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}/>

                </Col>
                <Col className="gutter-row" >
                    <div className="temp metric">
                                        <span>{forecast.temp}°
                                            {forecast.nightTemp ?
                                                <span>&nbsp;/&nbsp;{forecast.nightTemp}°</span>
                                                : null}</span>
                    </div>
                </Col>
                <Col className="gutter-row" >
                        <span className="phrase"></span>
                </Col>
                <Col className="gutter-row">
                    <span className="phrase">
                                        <span>{forecast.weather}</span>
                                </span>
                </Col>
                <Col className="gutter-row" >
                    <div className="precip">
                                        <span>
                                        <img alt="test"
                                             src="https://www.accuweather.com/images/components/weather/hourly-card-nfl/drop-icon.svg"
                                             className="precip-icon"/>&nbsp;
                                            {forecast.pop}%
                                        </span>
                    </div>
                </Col>
            </Row>
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
