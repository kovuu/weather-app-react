import React from "react";
import { Layout } from 'antd';
import './Header.css'

import ModeMenu from "./ModeMenu/ModeMenu";
import CityMenu from "./CityMenu/CityMenu";
const { Header } = Layout;

export default () => (
    <Header>
        <CityMenu />
        <ModeMenu />
    </Header>
)
