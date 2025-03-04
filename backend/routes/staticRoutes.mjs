import express from "express";
import { handleFeedbacks } from "../controller/handleapi.mjs";

const router = express.Router();

router.post("/feedback", handleFeedbacks);

export default router;
