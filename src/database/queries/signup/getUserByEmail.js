const connection = require("../../config/connection");

module.exports = (email) => {
  const { rows } = connection.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return rows[0];
};
