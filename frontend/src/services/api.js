import axios from "axios";

const API_URL = "http://localhost:5100";

export const loginUser = async (email, password) => {
  const response = await axios.get(`${API_URL}/users?email=${email}&password=${password}`);
  return response.data.length ? response.data[0] : null;
};

export const applyLeave = async (leaveData) => {
  return await axios.post(`${API_URL}/leaves`, leaveData);
};

export const getLeaves = async () => {
  return await axios.get(`${API_URL}/leaves`);
};
