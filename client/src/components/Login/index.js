import React, { Component } from "react";
import Login from "./Login";
import { withRouter } from "react-router";
import app from "../../base";

class LogInContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <Login onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(LogInContainer);
