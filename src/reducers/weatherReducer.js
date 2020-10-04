import {WEATHER_UPDATE} from "../consts/actionTypes";

const weatherReducer = (state = {}, {type ,params}) => {
    switch (type) {
        case WEATHER_UPDATE:
            const {city, temp, humidity, wind, pressure, weather, icon} = params;
            return {
                city, temp, humidity,
                wind, pressure, weather, icon
            }
        default:
            return state;
    }
}

export default weatherReducer;
