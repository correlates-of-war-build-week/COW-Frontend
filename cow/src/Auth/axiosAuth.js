import axios from "axios";

export const axiosAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://correlates-of-war-backend.herokuapp.com/api/auth/"
  });
};
