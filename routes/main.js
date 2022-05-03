const express = require("express");
const router = express.Router();

const Home = require("../controller/Home");
router.all("/", Home.index);


module.exports = router;
