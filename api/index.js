const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:XEsyCnFwQxGoLO5M@cluster0.ixp5a9f.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({ username, password });
  res.json(userDoc);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
