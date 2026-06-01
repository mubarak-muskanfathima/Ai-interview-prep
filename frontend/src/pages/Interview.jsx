import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { saveInterview } from "../services/interviewService";
import { generateQuestions } from "../services/aiService";
import {
  evaluateInterview,
} from "../services/evaluationService";
function Interview() {
  const [searchParams] = useSearchParams();
  const [feedback, setFeedback] =
  useState("");

  const category =
    searchParams.get("category");
const [answers, setAnswers] = useState([]);
const [loading, setLoading] = useState(false);
 const [score, setScore] =
  useState(0);
  const handleAnswerChange = (index, value) => {
  const updatedAnswers = [...answers];
  updatedAnswers[index] = value;
  setAnswers(updatedAnswers);
};

const submitInterview = async () => {
  try {
    setLoading(true);

    const userInfo = JSON.parse(
      localStorage.getItem("userInfo")
    );

    const result =
      await evaluateInterview(
        questions,
        answers
      );

    setFeedback(result);

    let extractedScore = 0;

    const match =
      result.match(/(\d+)\/100/);

    if (match) {
      extractedScore =
        Number(match[1]);

      setScore(extractedScore);
    }

    await saveInterview({
      user: userInfo._id,
      category,
      questions,
      answers,
      feedback: result,
      score: extractedScore,
    });

    setLoading(false);

    alert(
      "Interview saved successfully!"
    );
  } catch (error) {
    console.error(error);

    setLoading(false);

    alert(
      "Failed to save interview"
    );
  }
};

  const [questions, setQuestions] =
  useState([]);
  useEffect(() => {
  const fetchQuestions = async () => {
    try {
      console.log("Category:", category);

const result =
  await generateQuestions(category);

console.log("Result:", result);
      const questionArray =
        result
          .split("\n")
          .filter((q) => q.trim() !== "");

      setQuestions(questionArray);
    } catch (error) {
      console.error(error);
    }
  };

  fetchQuestions();
}, [category]);

  return (
    <div>
      <h1>{category} Interview</h1>

      {questions.map((q, index) => (
        <div key={index}>
          <h3>
            {index + 1}. {q}
          </h3>

          <textarea
  rows="4"
  cols="50"
  placeholder="Type your answer..."
  onChange={(e) =>
    handleAnswerChange(
      index,
      e.target.value
    )
  }
/>
          

          <br />
          <br />
          
        </div>
      ))}
       <button onClick={submitInterview}>
  Submit Interview
</button>
{loading && (
  <p>Evaluating answers... Please wait.</p>
)}
{feedback && (
  <div>
    <h2>AI Feedback</h2>

    <pre>
      {feedback}
    </pre>
  </div>
)}

    </div>
   
  );

}

export default Interview;