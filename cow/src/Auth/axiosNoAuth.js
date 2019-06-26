import axios from "axios";

export const axiosNoAuth = () => {
  return axios.create({
    baseURL: "https://correlates-of-war-backend.herokuapp.com/api/auth/"
  });
};
