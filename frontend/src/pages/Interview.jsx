import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { saveInterview } from "../services/interviewService";
import { generateQuestions } from "../services/aiService";
function Interview() {
  const [searchParams] = useSearchParams();

  const category =
    searchParams.get("category");
const [answers, setAnswers] = useState([]);
 
  const handleAnswerChange = (index, value) => {
  const updatedAnswers = [...answers];
  updatedAnswers[index] = value;
  setAnswers(updatedAnswers);
};
const submitInterview = async () => {
  try {
    const userInfo = JSON.parse(
      localStorage.getItem("userInfo")
    );

    await saveInterview({
      user: userInfo._id,
      category,
      questions,
      answers,
    });

    alert(
      "Interview saved successfully!"
    );
  } catch (error) {
    console.error(error);

    alert("Failed to save interview");
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
    </div>
   
  );

}

export default Interview;