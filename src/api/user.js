import { apiService } from "./apiService";

export const getAllUsers = async () => {
  try {
    const data = await apiService.get("users");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getUserById = async (id) => {
  try {
    const data = await apiService.get(`users/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};