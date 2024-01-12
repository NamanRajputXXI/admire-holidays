require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI);
// app.listen(3001, () => {
//   console.log(`server is running on ${3001}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const UserModel = require("./models/userModel");
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI);
app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => {
      console.log(`Server is running on ${3001}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
