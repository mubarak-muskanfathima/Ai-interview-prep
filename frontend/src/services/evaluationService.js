import axios from "axios";

export const evaluateInterview =
  async (questions, answers) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/evaluation/evaluate",
      {
        questions,
        answers,
      }
    );

    return data.feedback;
  };