const express = require("express");

const router = express.Router();

const {
  saveInterview,
  getInterviews,
} = require("../controllers/interviewController");

router.post("/save", saveInterview);

router.get(
  "/user/:userId",
  getInterviews
);

module.exports = router;