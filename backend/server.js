const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(bodyParser.json());
let feedbacks = [];
app.post("/api/feedback", (req, res) => {
  const { name, email, feedback } = req.body;
  if (!name || !email || !feedback) {
    return res.status(400).json({ message: "All fields are required" });
  }
  feedbacks.push({ name, email, feedback });
  console.log("Received feedback:", { name, email, feedback });
  return res.status(200).json({ message: "Feedback submitted successfully!" });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
