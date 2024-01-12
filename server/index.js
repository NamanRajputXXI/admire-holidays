const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RajasthanModel = require("./models/Jaipur");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/productsData/Rajasthan");
app.get("/getRajastahnData", (req, res) => {
  RajasthanModel.find()
    .then((destination) => res.json(destination))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("server is running");
});
