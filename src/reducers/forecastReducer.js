import {HOURLY_FORECAST, THREE_DAY_FORECAST, WEEKLY_FORECAST} from "../consts/actionTypes";

const forecastReducer = (state = [], action) => {
    switch (action.type) {
        case HOURLY_FORECAST:
            return action.forecastData;
        case THREE_DAY_FORECAST:
            console.log('3 day');
            return state;
        case WEEKLY_FORECAST:
            console.log('weekly');
            return state;
        default:
            return state;
    }
}

export default forecastReducer;
