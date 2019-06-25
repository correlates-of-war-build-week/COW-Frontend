import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions";

const initialState = {
  wars: [],
  logggingIn: false,
  error: null,
  loading: true,
  token: localStorage.getItem("token")
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("heres the store:", state);
      console.log("heres the action:", action);
      return {
        ...state,
        logggingIn: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        logggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logggingIn: false,
        error: action.payload
      };
    case SIGNUP_START:
      console.log("heres the store:", state);
      console.log("heres the action:", action);
      return {
        ...state,
        logggingIn: true,
        error: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        logggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        logggingIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
