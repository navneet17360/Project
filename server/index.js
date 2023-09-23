
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { port } from "./config.js"; 
import db from "./database.js"; 
import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/posts", postRoutes);

app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});


app.listen(port, () => {
  console.log("Service started on port:", port);
});
