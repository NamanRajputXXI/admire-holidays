// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const RajasthanModel = require("./models/Jaipur");
// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/productsData");
// app.get("/getRajasthanData", (req, res) => {
//   RajasthanModel.find({})
//     .then((destinations) => {
//       console.log("Number of documents:", destinations.length);
//       console.log(destinations);
//       return res.json(destinations);
//     })
//     .catch((err) => {
//       console.error("Error fetching data:", err);
//       res.status(500).json({ error: "Internal Server Error" });
//     });
// });
// app.listen(3001, () => {
//   console.log("server is running");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RajasthanModel = require("./models/Jaipur");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/productsData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Check for successful connection
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Check for connection error
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Define the route to get users
app.get("/getRajasthanData", (req, res) => {
  RajasthanModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
