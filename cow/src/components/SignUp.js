import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { FormGroup, Input, Button } from "reactstrap";

import { signUp } from "../actions";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    return (
      <div className="login login-img">
        <h1 className="login-text">Sign Up</h1>
        <FormGroup>
          <Input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChanges}
            className={" login-input"}
            required
          />

          <Input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChanges}
            className={" login-input"}
            required
          />
        </FormGroup>
        <Button className="login-btn" onClick={this.signUp}>
          {this.props.loggingIn === true ? (
            <Loader type="Circles" color="#87cefa" />
          ) : (
            "Sign Up"
          )}
        </Button>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.token) {
      this.props.history.push("/");
    }
  }
  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUp = () => {
    // console.log("sign up works");
    this.props
      .signUp({
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        this.props.history.push("/login");
      });
  };
}

const mapStateToProps = ({ token, loggingIn, error }) => ({
  token,
  loggingIn,
  error
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
