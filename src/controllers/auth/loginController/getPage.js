const { join } = require("path");

const getLoginPage = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "..", "public", "html", "login.html")
  );
};

module.exports = { getLoginPage };
