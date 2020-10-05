import React from "react";
import './App.css';
import Layout from "../Layout/Layout";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path={'/:city/:mode'} component={Layout}/>
            <Redirect from="/" to="/taganrog/today" />
        </Switch>
    </BrowserRouter>
)

export default App;
