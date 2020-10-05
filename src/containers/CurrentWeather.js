import {connect} from 'react-redux';
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";


const currentTime = () => {
    const date =  new Date();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${date.getHours()}:${minutes}`;
}

const mapStateToProps = ({ weatherReducer }) => ({
    temp: weatherReducer.temp,
    time: currentTime(),
    city: weatherReducer.city,
    humidity: weatherReducer.humidity,
    wind: weatherReducer.wind,
    pressure: weatherReducer.pressure,
    icon: weatherReducer.icon,
    weather: weatherReducer.weather
})


const CurrentWeatherBlock = connect(mapStateToProps)(CurrentWeather);

export default CurrentWeatherBlock;
