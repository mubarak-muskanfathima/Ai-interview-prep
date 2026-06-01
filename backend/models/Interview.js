const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    category: {
      type: String,
      required: true,
    },
    feedback: {
  type: String,
},

    score: {
      type: Number,
      default: 0,
    },
    feedback: {
  type: String,
},

    questions: [String],

    answers: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Interview",
  interviewSchema
);