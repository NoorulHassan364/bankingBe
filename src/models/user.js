const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    unique: [true, "email already exist"],
    required: [true, "you must have an email"],
  },

  password: {
    type: String,
    required: [true, "you must have password"],
  },

  accBalance: {
    type: Number,
    default: 1000
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
