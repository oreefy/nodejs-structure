const express = require("express");
const main = require("./main");
const NotFound = require("../middleware/NotFound");

const router = (app) => {
  app.use(express.json());
  app.use("/", main);
  app.use(NotFound);
};

module.exports = router;
