import express from "express";
import { readData } from "../utils/readData.js";

const router = express.Router();

router.get("/", (req, res) => {
  const tasks = readData("./data/tasks.json");
  res.json(tasks.filter(t => t.active));
});

export default router;
