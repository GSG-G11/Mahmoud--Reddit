const connection = require("../../config/connection");
module.exports = async (name, email, password) =>
  connection.query(
    `INSERT INTO users (name,email, password) values ($1,$2,$3) RETURNING *;`,
    [name, email, password]
  );
