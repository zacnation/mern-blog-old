const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, min: 3 },
  password: { type: String, required: true, min: 3 },
});

const UserModel = new model("User", UserSchema);

module.exports = UserModel;
