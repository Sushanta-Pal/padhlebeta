import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your backend URL
  withCredentials: true, // optional, if using cookies
});

export default API;
