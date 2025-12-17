import express from "express";
import cors from "cors";

import taskRoutes from "./routes/tasks.js";
import submitRoutes from "./routes/submit.js";
import withdrawRoutes from "./routes/withdraw.js";
import adminRoutes from "./routes/admin.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("admin"));

app.use("/api/tasks", taskRoutes);
app.use("/api/submit", submitRoutes);
app.use("/api/withdraw", withdrawRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("✅ DVT Backend Running (Static Mode)");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("🚀 Server running on port", PORT)
);
