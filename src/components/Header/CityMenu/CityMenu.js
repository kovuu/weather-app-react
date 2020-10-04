import React from "react";
import {Dropdown, Menu} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {NavLink, withRouter} from "react-router-dom";


const cities = [
    'Krasnodar', 'Taganrog', 'Moscow', 'Murmansk'
]


const CityMenu = (props) => {

    const toNameCase = (city) => {
        return city.charAt(0).toUpperCase() + city.substr(1);
    }

    const currentCity = toNameCase(props.match.params.city);

    const citiesListMenu = (
        <Menu className="citiesList">
            {cities.map((city, index) => {
                return (
                    <Menu.Item key={index}>
                        <NavLink to={`/${city.toLowerCase()}/${props.match.params.mode}`}>
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
