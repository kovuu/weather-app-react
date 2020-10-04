import Header from "../Header/Header";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Charts from "../Charts";
import {Layout} from "antd";
import React from "react";

const {Content} = Layout;

export default () => (
    <Layout className="layout">
        <Header className="header" />
        <Content style={{padding: '0 50px'}}>
            <div className="site-layout-content">
                <CurrentWeather />
                <Forecast />
                <Charts />
            </div>
        </Content>
    </Layout>
)
