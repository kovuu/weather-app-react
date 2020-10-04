import Forecast from "../../containers/Forecast";
import Charts from "../../containers/Charts";
import {Layout} from "antd";
import React from "react";
import CurrentWeatherBlock from "../../containers/CurrentWeather";
import HeaderCont from "../../containers/HeaderCont";

const {Content} = Layout;

export default () => {


    return (
        <Layout className="layout">
            <HeaderCont className="header"/>
            <Content style={{padding: '0 50px'}}>
                <div className="site-layout-content">
                    <CurrentWeatherBlock/>
                    <Forecast/>
                    <Charts/>
                </div>
            </Content>
        </Layout>
    )
}
