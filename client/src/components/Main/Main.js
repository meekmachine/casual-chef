import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from "../../App";
import NotFound from "../NotFound";
import Homepage from "../Homepage";
import Login from "../Login";
import SignUp from "../SignUp";
import PrivateRoute from "../../PrivateRoute";
import firebase from "../../base";


class Router extends React.Component {
	state = {
		loading: true,
		authenticated: false,
		user: null
	}
    componentWillMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.setState({
            authenticated: true,
            currentUser: user,
            loading: false
          });
        } else {
          this.setState({
            authenticated: false,
            currentUser: null,
            loading: false
          });
        }
      });
    }
    render(){
        return (
          <main>
            <Switch>
              <Route exact path = "/" component={Homepage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <PrivateRoute path = "/recipes" component={App} authenticated={this.state.authenticated} />
              <Route component={Homepage} />
            </Switch>
          </main>
        )
    }
}


export default Router;