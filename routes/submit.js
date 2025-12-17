import express from "express";
import { readData } from "../utils/readData.js";
import { writeData } from "../utils/writeData.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { userId, taskId, imageUrl } = req.body;

  const submissions = readData("./data/submissions.json");
  submissions.push({
    id: Date.now(),
    userId,
    taskId,
    imageUrl,
    status: "pending"
  });

  writeData("./data/submissions.json", submissions);
  res.json({ success: true });
});

export default router;
