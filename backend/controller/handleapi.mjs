export async function handleFeedbacks(req, res) {
  const { name, email, feedback } = req.body;
  console.log("receverd feedback");
  if (!name || !email || !feedback) {
    return res.status(400).json({ message: "All fields are required" });
  }
  feedbacks.push({ name, email, feedback });
  console.log("Received feedback:", { name, email, feedback });
  return res.status(200).json({ message: "Feedback submitted successfully!" });
}
