const Interview = require("../models/Interview");

const saveInterview = async (req, res) => {
  try {
    const {
      user,
      category,
      questions,
      answers,
    } = req.body;

    const interview = await Interview.create({
      user,
      category,
      questions,
      answers,
    });

    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({
      user: req.params.userId,
    }).sort({ createdAt: -1 });

    res.json(interviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveInterview,
  getInterviews,
};