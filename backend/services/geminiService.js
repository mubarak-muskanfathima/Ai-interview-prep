const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateQuestions = async (category) => {
  const completion =
    await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Generate 5 interview questions for ${category}. Return only questions, one per line.`,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

  return completion.choices[0].message.content;
};

const evaluateAnswers = async (
  questions,
  answers
) => {
  const completion =
    await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
You are a strict technical interviewer.

Questions:
${questions.join("\n")}

Answers:
${answers.join("\n")}

Evaluation Rules:
- Score each answer based only on the answer provided.
- Empty answers must receive 0 marks.
- Very short answers (1-3 words) should receive very low marks.
- If all answers are empty, the final score must be 0/100.
- If most answers are empty, the final score should be below 20/100.
- Do not assume knowledge that is not written in the answer.
- Be realistic and strict.

Return exactly in this format:

Score: X/100

Strengths:
- ...

Weaknesses:
- ...

Suggestions:
- ...
`,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

  return completion.choices[0].message.content;
};

module.exports = {
  generateQuestions,
  evaluateAnswers,
};