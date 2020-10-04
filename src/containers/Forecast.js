import { connect } from "react-redux";
import Forecast from "../components/Forecast/Forecast";


const mapStateToProps = ({forecastReducer}) => ({
    forecasts: forecastReducer
});

export default connect(mapStateToProps)(Forecast);
