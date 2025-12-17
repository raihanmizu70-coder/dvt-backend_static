import express from "express";
import { readData, writeData } from "../utils/readData.js";

const router = express.Router();

router.post("/login", (req, res) => {
  if (req.body.password === "Mizu123@@") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

router.get("/submissions", (req, res) => {
  res.json(readData("./data/submissions.json"));
});

router.post("/approve", (req, res) => {
  const subs = readData("./data/submissions.json");
  const s = subs.find(x => x.id === req.body.id);
  if (s) s.status = "approved";
  writeData("./data/submissions.json", subs);
  res.json({ success: true });
});

export default router;
