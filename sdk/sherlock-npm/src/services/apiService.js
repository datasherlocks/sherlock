// apiService.js
import axios from "axios";

const API_BASE_URL = "https://reqres.in/api"; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define your API endpoints here
const endpoints = {
  getUsers: "/users?page=2",
  // Add more endpoints as needed
};

// Create functions to make API requests
const api = {
  getUsers: () => apiService.get(endpoints.getUsers),
  // Add more functions for other endpoints
};

export default api;
