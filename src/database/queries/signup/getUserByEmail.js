const connection = require("../../config/connection");

module.exports = (email) => {
  const row = connection.query("SELECT * FROM users WHERE email = $1", [email]);
  return row;
};
