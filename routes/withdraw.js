import express from "express";
import { readData, writeData } from "../utils/readData.js";

const router = express.Router();

router.post("/", (req, res) => {
  const withdraws = readData("./data/withdraws.json");
  withdraws.push({
    id: Date.now(),
    ...req.body,
    status: "pending"
  });
  writeData("./data/withdraws.json", withdraws);
  res.json({ success: true });
});

export default router;
