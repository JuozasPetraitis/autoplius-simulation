import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Routes
app.get("/", (req, res) => res.send("NICKI MINAJ"));

// Starting server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
