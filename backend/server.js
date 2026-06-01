require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const aiRoutes = require("./routes/aiRoutes");
const evaluationRoutes = require("./routes/evaluationRoutes");

const app = express();

// Environment Check
console.log("ENV CHECK:");
console.log(process.env.MONGO_URI);
console.log(process.env.JWT_SECRET);
console.log(process.env.GROQ_API_KEY ? "GROQ KEY FOUND" : "GROQ KEY MISSING");

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/evaluation", evaluationRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("AI Interview Prep API Running");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});