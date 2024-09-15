import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Your Django backend URL
  timeout: 10000,
});

export default api;
