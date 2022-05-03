const server = (app) => {
  app.listen(process.env.APP_PORT);
};
module.exports = server;
