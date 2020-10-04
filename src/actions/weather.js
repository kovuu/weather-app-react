import {HOURLY_FORECAST, THREE_DAY_FORECAST, WEATHER_UPDATE, WEEKLY_FORECAST} from "../consts/actionTypes";
import axios from "../axios/axios";
import cities from "../consts/cities";



export function updateWeather(params) {
    return async dispatch => {
        try {
            const city = cities.filter(city => city.city.toLowerCase() === params.city.toLowerCase())[0];
            const apiKey = process.env.REACT_APP_API_KEY;
            const response = await axios.get(`/weather?units=metric&lat=${city.coords[0]}&lon=${city.coords[1]}&appid=${apiKey}`);
            const data = response.data;
            const parameters = {
                city: city.city,
                temp: parseInt(data.main.temp),
                humidity: data.main.humidity,
                wind: data.wind.speed,
                pressure: data.main.pressure,
                weather: data.weather[0].main,
                icon: data.weather[0].icon
            }
            dispatch(updateWeatherDispatcher(parameters));
        } catch (e) {
            console.log(e);
        }
    }
}

export function updateWeatherDispatcher(params) {
    return {
        type: WEATHER_UPDATE,
        params
    }
}

export function updateForecast(params) {
    return async dispatch => {
        try {
            const city = cities.filter(city => city.city.toLowerCase() === params.city.toLowerCase())[0];
            const apiKey = process.env.REACT_APP_API_KEY;
            const response = await axios.get(`/onecall?lat=${city.coords[0]}&lon=${city.coords[1]}&appid=${apiKey}&units=metric`);
            // eslint-disable-next-line default-case
            switch (params.mode) {
                case 'today':
                    const forecastData = response.data.hourly;
                    let forecast = [];
                    for (let i = 0; i < 24; i++) {
                        const data = forecastData[i];

                        const date = new Date(data.dt * 1000);
                        const day = `${date.getDate()}/${date.getMonth() + 1}`;
                        const hours = date.getHours();
                        const parameters = {
                            temp: parseInt(data.temp),
                            weather: data.weather[0].main,
                            icon: data.weather[0].icon,
                            hours, day,
                            pop: data.pop,
                        }
                        forecast.push(parameters);
                    }
                    dispatch(getHourlyForecast(forecast));
                    break;
                case 'three-days':
                    dispatch(getThreeDayForecast());
                    break;
                case 'week':
                    dispatch(getWeeklyForecast());
                    break;
            }
        } catch(e) {
            console.log(e);
        }
    }
}

export function getHourlyForecast(forecastData) {
    return {
        type: HOURLY_FORECAST,
        forecastData
    }
}

export function getThreeDayForecast() {
    return {
        type: THREE_DAY_FORECAST
    }
}
export function getWeeklyForecast() {
    return {
        type: WEEKLY_FORECAST
    }
}
