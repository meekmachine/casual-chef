import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from "../../App";
import NotFound from "../NotFound";
import Homepage from "../Homepage";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Homepage} />
            <Route path = "/recipes" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;