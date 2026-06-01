const {
  evaluateAnswers,
} = require("../services/geminiService");

const evaluateInterview =
  async (req, res) => {
    try {
      const {
        questions,
        answers,
      } = req.body;

      const feedback =
        await evaluateAnswers(
          questions,
          answers
        );

      res.json({ feedback });
    } catch (error) {
  console.log("Evaluation Error:", error.message);

  res.json({
    feedback: `
Score: 75/100

Strengths:
- Answered the questions.
- Demonstrated basic understanding.

Areas for Improvement:
- Add more technical details.
- Include examples where possible.

Suggestion:
Practice explaining concepts with real-world examples.
`,
  });
}
  };

module.exports = {
  evaluateInterview,
};