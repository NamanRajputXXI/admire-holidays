const app = require("express")();
require("dotenv").config();

const http = require("http").Server(app);
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = require("./models/userModel");

http.listen(3001, function () {
  console.log("server is running");
});
