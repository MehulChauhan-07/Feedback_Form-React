const express = require("express");
const { handleFeedback } = require("../controller/handlefeedback");

const router = express.Router();

router.post("/feedback", handleFeedback);

module.exports = router;
