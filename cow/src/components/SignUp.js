import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { FormGroup, Input } from "reactstrap";

import { signUp } from "../actions";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    return (
      <div className="login">
        <h1>Sign Up</h1>
        <FormGroup>
          <div>
            <Input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChanges}
              className={" login-input"}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChanges}
              className={" login-input"}
              required
            />
          </div>
          <button onClick={this.signUp}>
            {this.props.loggingIn === true ? (
              <Loader type="Circles" color="#87cefa" />
            ) : (
              "Sign Up"
            )}
          </button>
        </FormGroup>
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
