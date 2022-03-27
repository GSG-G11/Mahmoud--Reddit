const connection = require("../../config/connection");
module.exports = async (title, description, user_id) =>
  connection.query(
    `INSERT INTO posts (title,description, user_id) values ($1,$2,$3) RETURNING *;`,
    [title, description, user_id]
  );
