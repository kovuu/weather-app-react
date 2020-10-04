import { combineReducers } from "redux";
import weatherReducer from './weatherReducer';
import forecastReducer from "./forecastReducer";

export default combineReducers({
    weatherReducer,
    forecastReducer
});
