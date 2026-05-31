import { useEffect, useState } from "react";
import { getHistory } from "../services/historyService";

function History() {
  const [history, setHistory] =
    useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const userInfo = JSON.parse(
          localStorage.getItem("userInfo")
        );

        const data = await getHistory(
          userInfo._id
        );

        setHistory(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>Interview History</h1>

      {history.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.category}</h3>

          <p>
            Questions:
            {" "}
            {item.questions.length}
          </p>

          <p>
            Answers:
            {" "}
            {item.answers.length}
          </p>

          <p>
            Date:
            {" "}
            {new Date(
              item.createdAt
            ).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default History;