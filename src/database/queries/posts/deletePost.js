const connection = require("../../config/connection");
module.exports = async (id) => {
  return connection.query(`DELETE FROM posts WHERE id = $1;`, [id]);
};
