const express = require("express");

const router = express.Router();

const {
  generateInterviewQuestions,
} = require(
  "../controllers/aiController"
);

router.post(
  "/generate",
  generateInterviewQuestions
);

module.exports = router;