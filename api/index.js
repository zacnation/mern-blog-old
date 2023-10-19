const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const dbUrl = process.env.DB_URL;
const secret = process.env.SECRET;
const cookieParser = require("cookie-parser");

const salt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });

    if (userDoc) {
      const isPasswordCorrect = bcrypt.compareSync(password, userDoc.password);
      if (isPasswordCorrect) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json("ok");
        });
      } else {
        res.status(400).json("wrong credentials");
      }
    } else {
      res.status(400).json("user not found");
    }
  } catch (e) {
    res.status(400).json(e);
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, payload) => {
    if (err) throw err;
    res.json(payload);
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
