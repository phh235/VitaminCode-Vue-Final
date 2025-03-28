import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/";

// const getToken = () => localStorage.getItem("token")

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    // Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  },
})

export const apiService = {
  get: async (url) => {
    try {
      return (await api.get(url)).data
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}