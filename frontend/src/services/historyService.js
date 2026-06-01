import axios from "axios";

const API_URL =
  "https://ai-interview-prep-bce9.onrender.com/api/interviews";

export const getHistory = async (
  userId
) => {
  const response = await axios.get(
    `${API_URL}/user/${userId}`
  );

  return response.data;
};