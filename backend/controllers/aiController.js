const {
  generateQuestions,
} = require("../services/geminiService");
const generateInterviewQuestions = async (req, res) => {
  try {
    const { category } = req.body;

    const questions =
      await generateQuestions(category);

    res.json({ questions });
  } catch (error) {
    console.log("Gemini Error:", error.message);

    const fallbackQuestions = `
What is Java?
What is OOP?
What is Inheritance?
What is Polymorphism?
What is Exception Handling?
`;

    res.json({
      questions: fallbackQuestions,
    });
  }
};

module.exports = {
  generateInterviewQuestions,
};