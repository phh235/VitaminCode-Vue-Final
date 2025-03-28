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
  },

  post: async (url, data) => {
    try {
      return (await api.post(url, data)).data
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  delete: async (url, id) => {
    try {
      return (await api.delete(url, { data: id })).data
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
}