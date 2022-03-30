const connection = require("../../config/connection");
module.exports = async (posts_Id) => {
  const { rows } = await connection.query(
    `SELECT  comments.description, comments.created_at ,posts.id,users.id
    FROM comments JOIN posts ON comments.post_id = $1 JOIN users ON comments.user_id = users.id ORDER BY comments.created_at DESC;`,
    [posts_Id]
  );
  return rows;
};
