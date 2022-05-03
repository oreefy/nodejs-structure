const mongoose = require("mongoose");
mongoose
  .connect(process.env.APP_DATABASE)
  .catch((err) => console.log("Database connection failed: " + err.message));
module.exports = mongoose;
