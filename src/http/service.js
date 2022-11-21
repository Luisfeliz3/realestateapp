import axios from "axios";
import { url } from "./url";

//Standard axios GET
// axios.get('http://localhost:5005/')

//GET request
//GET order: route, headers
export const get = (route) => {
  const token = localStorage.getItem("token");
  console.log("This was taken out of localStorage", token);

  return axios.get(`${url}${route}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }), //the token goes here
    },
  });
};

// //POST order: route, body, headers
export const post = (route, body) => {
  const token = localStorage.getItem("token");
  console.log("This was taken out of localStorage", token);

  return axios.post(`${url}${route}`, body, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }), //the token goes here
    },
  });
};
