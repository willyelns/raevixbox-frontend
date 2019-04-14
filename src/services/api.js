import axios from "axios";

const api = axios.create({
  baseURL: "https://raevixboxbackend.herokuapp.com"
});

export default api;
