const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RajasthanModel = require("./models/Jaipur");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/productData");
// app.get("/getRajasthanData", (req, res) => {
//   RajasthanModel.find()
//     .then((destinations) => {
//       console.log("Number of documents:", destinations.length);
//       console.log(destinations);
//       return res.json(destinations);
//     })
//     .catch((err) => res.json(err));
// });
app.get("/getRajasthanData", (req, res) => {
  RajasthanModel.find({})
    .then((destinations) => {
      console.log("Number of documents:", destinations.length);
      console.log(destinations);
      return res.json(destinations);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});
app.listen(3001, () => {
  console.log("server is running");
});
