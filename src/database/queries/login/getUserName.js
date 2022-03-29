const connection = require("../../config/connection");

module.exports = async (id) => {
  const { rows } = await connection.query(
    "SELECT name FROM users WHERE id = $1",
    [id]
  );
  return rows[0];
};
