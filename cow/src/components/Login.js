import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Input, FormGroup, Button } from "reactstrap";

import { login } from "../actions";

class Login extends Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="login login-img">
        <h1 className="login-text">Please Login</h1>

        <FormGroup>
          <Input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChanges}
            className={"login-input"}
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
        <Button className="login-btn" size="lg" onClick={this.login}>
          {this.props.loggingIn === true ? (
            <Loader type="Circles" color="#87cefa" />
          ) : (
            "Log In"
          )}
        </Button>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.token) {
      this.props.history.push("login");
    }
  }
  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    this.props
      .login({
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        this.props.history.push("correlates_of_war");
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
  { login }
)(Login);
