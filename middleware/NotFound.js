module.exports = (req, res, next) => {
  res.headersSent
    ? next("Headers already sent.")
    : res.status(404).json({
        status: 404,
        statusText: "Not Found",
        message: `404. That’s an error. The requested URL ${req.path} was not found on this server. That’s all we know.`,
      });
};
