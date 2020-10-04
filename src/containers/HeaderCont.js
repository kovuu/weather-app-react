import Header from "../components/Header/Header";
import {connect} from "react-redux";
import {updateForecast, updateWeather} from "../actions/weather";

const mapDispatchToProps = dispatch => ({
    updateWeather: (params) => dispatch(updateWeather(params)),
    updateForecast: (params) => dispatch(updateForecast(params))
})


export default connect(null, mapDispatchToProps)(Header);
