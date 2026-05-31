import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  useEffect(() => {
    const user = localStorage.getItem("userInfo");

    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const categories = [
    "Java",
    "Python",
    "Web Development",
    "DBMS",
    "Operating Systems",
    "HR Interview",
  ];

  return (
    <div>
      <h1>AI Interview Preparation Platform</h1>

      <h2>Welcome {userInfo?.name}</h2>

      <button onClick={logoutHandler}>
        Logout
      </button>

      <hr />

      <h3>Select Interview Category</h3>

      {categories.map((category) => (
        <div
          key={category}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h4>{category}</h4>

          <button
  onClick={() =>
    navigate(
      `/interview?category=${encodeURIComponent(
        category
      )}`
    )
  }
>
  Start Interview
</button>

        </div>
      ))}
      <button
  onClick={() =>
    navigate("/history")
  }
>
  View History
</button>
    </div>
  );
}

export default Dashboard;