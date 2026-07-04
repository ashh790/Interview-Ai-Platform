import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

app.get("/", (_req, res) => {
  res.send("InterviewAI API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});