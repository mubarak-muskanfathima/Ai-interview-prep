const {
  generateQuestions,
} = require("../services/geminiService");

const generateInterviewQuestions =
  async (req, res) => {
    try {
      const { category } = req.body;

      const questions =
        await generateQuestions(category);

      res.json({ questions });
    } catch (error) {
  console.error("AI ERROR:", error);

  res.status(500).json({
    message: error.message,
  });
}
  };

module.exports = {
  generateInterviewQuestions,
};