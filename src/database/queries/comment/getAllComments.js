const connection = require("../../config/connection");
module.exports = async (posts_Id) => {
  const { rows } = await connection.query(
    `SELECT  comments.description, DATE(comments.created_at) ,users.name
    FROM comments INNER JOIN users ON comments.user_id = users.id WHERE comments.post_id = $1 ORDER BY comments.created_at DESC;`,
    [posts_Id]
  );
  return rows;
};
