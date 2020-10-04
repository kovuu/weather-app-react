import React, {useEffect} from "react";
import { Layout } from 'antd';
import './Header.css';
import {withRouter} from "react-router-dom";


import ModeMenu from "./ModeMenu/ModeMenu";
import CityMenu from "./CityMenu/CityMenu";
const { Header } = Layout;

export default withRouter((props) => {
    useEffect(() => {
        const params = {
            city: props.match.params.city,
            mode: props.match.params.mode
        }
        props.updateForecast(params);
        props.updateWeather(params);
    },[props]);

    return(
    <Header>
        <CityMenu updateWeather={props.updateWeather}/>
        <ModeMenu updateWeather={props.updateWeather}/>
    </Header>
)

});
