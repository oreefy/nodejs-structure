const mongoose = require("mongoose");

const schema = {
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 4,
    maxlength: 16,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
};
module.exports = mongoose.model("User", new mongoose.Schema(schema));
