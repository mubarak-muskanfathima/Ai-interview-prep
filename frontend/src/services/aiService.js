import axios from "axios";

const API_URL =
  "http://localhost:5000/api/ai";

export const generateQuestions =
  async (category) => {
    const response = await axios.post(
      `${API_URL}/generate`,
      { category }
    );

    return response.data.questions;
  };