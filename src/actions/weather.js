import {
    FORECAST_UPDATE,
    WEATHER_UPDATE,
} from "../consts/actionTypes";
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
            let forecast = [];
            // eslint-disable-next-line default-case
            switch (params.mode) {
                case 'today':
                    forecast = getForecastHourlyData(response.data.hourly, 24);
                    dispatch(updateForecastDispatch(forecast));
                    break;
                case 'three-days':
                    forecast = getForecastHourlyData(response.data.hourly, 48);
                    dispatch(updateForecastDispatch(forecast));
                    break;
                case 'week':
                    console.log(response.data.daily);
                    forecast = getForecastWeeklyData(response.data.daily);
                    dispatch(updateForecastDispatch(forecast));
                    break;
            }
        } catch(e) {
            console.log(e);
        }
    }
}

export function getForecastHourlyData(forecastData, hours) {
    let forecast = [];
        for (let i = 0; i < hours; i++) {
            const data = forecastData[i];

            const date = new Date(data.dt * 1000);
            const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            const hours = date.getHours() === 0 ? 24 : date.getHours();
            const parameters = {
                temp: parseInt(data.temp),
                weather: data.weather[0].main,
                icon: data.weather[0].icon,
                hours, day,
                pop: parseInt(data.pop * 100),
            }
            forecast.push(parameters);
    }
        return forecast;
}

export function getForecastWeeklyData(forecastData) {
    let forecast = [];
    for (let i = 0; i < forecastData.length; i++) {
        const data = forecastData[i];

        const date = new Date(data.dt * 1000);
        const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const hours = date.getHours() === 0 ? 24 : date.getHours();
        const parameters = {
            temp: parseInt(data.temp.day),
            nightTemp: parseInt(data.temp.night),
            weather: data.weather[0].main,
            icon: data.weather[0].icon,
            hours, day,
            pop: parseInt(data.pop * 100),
            units: 'days'
        }
        forecast.push(parameters);
    }
    return forecast;
}

export function updateForecastDispatch(forecastData) {
    return {
        type: FORECAST_UPDATE,
        forecastData
    }
}
