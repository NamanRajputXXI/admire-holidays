// server.js
// const express = require("express");
// const connectDB = require("./db");
// const JaipurModel = require("./models/Jaipur");

// const app = express();
// const PORT = process.env.PORT || 3001;

// connectDB();

// app.get("/api/jaipur", async (req, res) => {
//   try {
//     const jaipurData = await JaipurModel.findOne({ heading: "Jaipur" });
//     res.json(jaipurData);
//   } catch (error) {
//     console.error("Error fetching Jaipur data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
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
