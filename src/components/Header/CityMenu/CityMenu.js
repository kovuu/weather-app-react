import React from "react";
import {Dropdown, Menu} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {NavLink, withRouter} from "react-router-dom";
import cities from "../../../consts/cities"

const CityMenu = (props) => {
    const toNameCase = (city) => {
        return city.charAt(0).toUpperCase() + city.substr(1);
    }

    const currentCity = toNameCase(props.match.params.city);

    const citiesListMenu = (
        <Menu className="citiesList">
            {cities.map((cityInfo, index) => {
                const city = cityInfo.city;
                const mode = props.match.params.mode;
                const params = {
                    city,
                    mode
                }
                return (
                    <Menu.Item key={index}>
                        <NavLink onClick={() => props.updateWeather(params)} to={`/${city.toLowerCase()}/${mode}`}>
                            {city}
                        </NavLink>
                    </Menu.Item>
                )
            })}
        </Menu>
    )

    return (
        <Dropdown overlay={citiesListMenu} className="cities">
            <span className="ant-dropdown-link">
                {currentCity} <DownOutlined />
            </span>
        </Dropdown>
    )
}

export default withRouter(CityMenu);
