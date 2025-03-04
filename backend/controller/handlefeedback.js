const Feedbacks  = require("../models/feedback");

async function handleFeedback(req, res) {
  try {
    const { name, email, feedback } = req.body;
    console.log("Received feedback:", req.body);
    if (!name || !email || !feedback) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Feedbacks.create({ name, email, feedback });

    console.log("Received feedback:", { name, email, feedback });

    return res
      .status(200)
      .json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Error in handleFeedback", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = { handleFeedback };
