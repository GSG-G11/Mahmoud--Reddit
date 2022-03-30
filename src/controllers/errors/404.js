const { join } = require("path");

const client = (req, res) => {
  res
    .status(404)
    .sendFile(join(__dirname, "..", "..", "..", "public", "html", "404.html"));
};

module.exports = { client };
