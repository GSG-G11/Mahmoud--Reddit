const connection = require("../../config/connection");
module.exports = async () => {
  const { rows } = await connection.query(
    `SELECT posts.title , posts.description, posts.created_at, users.name 
    FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.id DESC;`,
    []
  );
  return rows;
};
