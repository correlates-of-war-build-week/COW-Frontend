import { axiosAuth } from "../Auth/axiosAuth";
import { axiosNoAuth } from "../Auth/axiosNoAuth";
import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return (
    axios
      .post(
        "https://correlates-of-war-backend.herokuapp.com/api/auth/login",
        creds
      )
      //"https://correlates-of-war-backend.herokuapp.com/api/auth/login",
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem("token", res.data.token);
        dispatch({ type: LOGIN_SUCCESS });
        // dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });

        // return true;
      })
      .catch(err => console.log(err.response))
  );
};

export const signUp = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return (
    axios
      // axiosNoAuth()

      .post(
        "https://correlates-of-war-backend.herokuapp.com/api/auth/register",
        creds
      )
      //"https://correlates-of-war-backend.herokuapp.com/api/auth/register",
      .then(res => {
        console.log(res.data);
        // localStorage.setItem("token", res.data.payload);
        dispatch({ type: SIGNUP_SUCCESS });
        // return true;
      })
      .catch(err => console.log(err.response))
  );
};
