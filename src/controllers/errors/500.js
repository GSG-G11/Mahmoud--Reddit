const { join } = require("path");

// eslint-disable-next-line no-unused-vars
const server = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(join(__dirname, "..", "..", "..", "public", "html", "500.html"));
};

module.exports = { server };
