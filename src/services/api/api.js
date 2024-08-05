import axios from "axios";

const api = axios.create({
  baseURL: "https://66ae5170b18f3614e3b760fa.mockapi.io",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;