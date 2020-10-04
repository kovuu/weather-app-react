import {connect} from "react-redux";
import Charts from "../components/Charts";


const mapStateToProps = ({forecastReducer}) => ({
    forecasts: forecastReducer
});

export default connect(mapStateToProps)(Charts);
