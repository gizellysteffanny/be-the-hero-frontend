import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL || "https://herothebe.herokuapp.com/"
});

export default api;
