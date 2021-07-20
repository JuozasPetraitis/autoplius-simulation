import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();

import UserAndCars from "./models/usersAndCarsModel.js";

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());

// Connecting DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log(`Connected to MongoDB`.magenta);
    // Starting server
    app.listen(PORT, () => {
      console.log(`Server runs the trap on ${PORT}`.trap.yellow);
    });
  });

// Routes
app.get("/", (req, res) => res.send("NICKI MINAJ"));

app.get("/api/cars", (req, res) => {
  UserAndCars.find({}).then((data) => res.json(data));
});
