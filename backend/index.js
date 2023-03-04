const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("CONNECT MONGODB");
});

//ROUTES
app.use("v1/auth", authRoute);

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(8000, () => {
  console.log("SEVER START");
});
