const { join } = require("path");

const getSignupPage = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "..", "public", "html", "signup.html")
  );
};

module.exports = { getSignupPage };
