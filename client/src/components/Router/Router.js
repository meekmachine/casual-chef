import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from "../../App";
import NotFound from "../NotFound";
import Homepage from "../Homepage";
import Login from "../Login";
import SignUp from "..SignUp";

const Router = () => (
	state = {
		loading: true,
		authenticated: false,
		user: null
	}
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path = "/" component={Homepage} authenticated={this.state.authenticated}/>
           	<Route exact path="/login" component={Login} />
        	<Route exact path="/signup" component={SignUp} />
            <Route path = "/recipes" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;