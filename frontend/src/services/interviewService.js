import axios from "axios";

const API_URL =
  "http://localhost:5000/api/interviews";

export const saveInterview = async (
  interviewData
) => {
  const response = await axios.post(
    `${API_URL}/save`,
    interviewData
  );

  return response.data;
};