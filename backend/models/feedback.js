// create mongoose schema
const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});
// create mongoose model
const Feedbacks = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedbacks;
