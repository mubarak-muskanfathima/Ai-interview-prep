const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log(
  "Gemini Key:",
  process.env.GEMINI_API_KEY
);
const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const generateQuestions = async (category) => {
  const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});
  const prompt = `
Generate 5 interview questions for ${category}.
Return only the questions.
One question per line.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};


module.exports = {
  generateQuestions,
};