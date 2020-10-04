import React from "react";
import {Menu} from "antd";
import {NavLink, withRouter} from "react-router-dom";


const modes = [
    {label: 'Сегодня', name: 'today'},
    {label: '3 дня', name: 'three-days'},
    {label: 'Неделя', name: 'week'},
]

const ModeMenu = (props) => {
    const city = props.match.params.city;
    const mode = props.match.params.mode;

    return (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[mode]}>
                {modes.map((mode, index) => {
                    return (
                    <Menu.Item key={mode.name} >
                        <NavLink to={`/${city}/${mode.name}`}>
                            {mode.label}
                        </NavLink>
                    </Menu.Item>
                    )
                })}
        </Menu>
    )
}
export default withRouter(ModeMenu);


