import React from "react";
import {Menu} from "antd";
import {NavLink, withRouter} from "react-router-dom";
import modes from "../../../consts/modes";
import {updateWeather} from "../../../actions/weather";

const ModeMenu = (props) => {
    const city = props.match.params.city;
    const mode = props.match.params.mode;

    return (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[mode]}>
                {modes.map((mode, index) => {
                    const params = {
                        city,
                        mode
                    }
                    return (
                    <Menu.Item key={mode.name} >
                        <NavLink onClick={() => updateWeather(params)} to={`/${city}/${mode.name}`}>
                            {mode.label}
                        </NavLink>
                    </Menu.Item>
                    )
                })}
        </Menu>
    )
}
export default withRouter(ModeMenu);


