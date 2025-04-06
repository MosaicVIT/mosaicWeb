import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8001", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});
