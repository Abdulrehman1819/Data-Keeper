const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/userModel");
dotenv.config();
app.use(express.json());
const userRoute=require('./routes/userRoutes')
const cors = require('cors');

app.use(cors({
  origin: 'https://localhost:3000'
}));
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Not Connected", err);
  });
  app.listen(process.env.PORT);
  app.use(userRoute);