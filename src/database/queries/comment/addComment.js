const connection = require("../../config/connection");
module.exports = async (description, user_id, post_id) => {
  const { rows } = await connection.query(
    `INSERT INTO comments (description, user_id, post_id) values ($1,$2,$3) RETURNING *;`,
    [description, user_id, post_id]
  );
  return rows[0];
};
