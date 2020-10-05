import {FORECAST_UPDATE} from "../consts/actionTypes";

const forecastReducer = (state = [], action) => {
    switch (action.type) {
        case FORECAST_UPDATE:
            return action.forecastData;
        default:
            return state;
    }
}

export default forecastReducer;
