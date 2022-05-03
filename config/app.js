const express = require("express");
require("dotenv").config();
const server = require("./server");
const variable = require("./variable");
const routes = require("../routes/router");
const ErrorHandler = require("../middleware/ErrorHandler");
require("./database");

const app = express();
app.locals = variable;
routes(app);
app.use(ErrorHandler);
server(app);
