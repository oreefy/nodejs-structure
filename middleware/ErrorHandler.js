module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    next("Headers already sent.");
  } else {
    if (err.message) {
      res.status(500).json({ error: err.message });
      console.log("Error: " + err.message);
    } else {
      res.status(500).json({ error: "Internal Server Error" });
      console.log("Internal Server Error");
    }
  }
};
