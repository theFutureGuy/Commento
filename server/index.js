const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var morgan = require("morgan");


const authRoutes = require("./routes/auth.routes");

morgan("tiny");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  });
