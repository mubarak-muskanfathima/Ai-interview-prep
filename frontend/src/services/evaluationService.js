import axios from "axios";

export const evaluateInterview =
  async (questions, answers) => {
    const { data } = await axios.post(
      "https://ai-interview-prep-bce9.onrender.com/api/evaluation/evaluate",
      {
        questions,
        answers,
      }
    );

    return data.feedback;
  };