const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const data = require("./routes/rajData");
const notfound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/errorhandler");
require("dotenv").config();
const cors = require("cors");
app.use(cors());
// password: uAUpD8hsIBoCd4yT
// username: rathiabhishek53
// 49.37.45.241/32 - ip access list, my ip address
// mongodb+srv://rathiabhishek53:uAUpD8hsIBoCd4yT@cluster0.sweu8ev.mongodb.net/?retryWrites=true&w=majority

app.use(express.json());
app.use("/", data);
app.use(notfound); // handling 404 errors with a custom middleware
app.use(errorHandlerMiddleware);

// CAN CHANGE PORT VALUE IN .env
const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening to port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
