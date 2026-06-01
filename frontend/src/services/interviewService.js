import axios from "axios";

const API_URL =
  "https://ai-interview-prep-bce9.onrender.com/api/interviews";

export const saveInterview = async (
  interviewData
) => {
  const response = await axios.post(
    `${API_URL}/save`,
    interviewData
  );

  return response.data;
};