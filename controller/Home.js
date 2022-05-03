const User = require("../schema/user");
const Home = {
  index: (req, res) => {
    res.status(200).json({ message: "Welcome to " + req.app.locals.app.name });
  },
};

module.exports = Home;
