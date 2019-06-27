import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FETCH_MAPDATA_START,
  FETCH_MAPDATA_SUCCESS,
  FETCH_MAPDATA_FAILURE
} from "../actions";

const initialState = {
  mapData: [],
  loggingIn: false,
  error: null,
  loading: true,
  token: localStorage.getItem("token"),
  fetchingData: false
};
// console.log("reducer mapData", mapData);
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("heres the store:", state);
      console.log("heres the action:", action);
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case SIGNUP_START:
      console.log("heres the store:", state);
      console.log("heres the action:", action);
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case FETCH_MAPDATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_MAPDATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        mapData: action.payload
      };
    case FETCH_MAPDATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
