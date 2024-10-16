import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./src/routes/user-routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log(`Connected to server at port ${process.env.PORT}`));

app.get("/", (req, res) =>
  res.send(`Express and Node.js running on port ${process.env.PORT}`)
);
