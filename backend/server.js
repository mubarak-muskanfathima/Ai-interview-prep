require("dotenv").config();
const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const interviewRoutes = require(
  "./routes/interviewRoutes"
);
const aiRoutes = require(
  "./routes/aiRoutes"
);
dotenv.config();


console.log("ENV CHECK:");
console.log(process.env.MONGO_URI);
console.log(process.env.JWT_SECRET);
console.log(process.env.GEMINI_API_KEY);
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(
  "/api/interviews",
  interviewRoutes
);
app.get("/", (req, res) => {
  res.send("AI Interview Prep API Running");
});
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});