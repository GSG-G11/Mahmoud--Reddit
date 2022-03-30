const { getPosts } = require("../../database/queries");
const { verifyToken } = require("../../utils");
require("dotenv").config();
module.exports = async (req, res) => {
  try {
    const {
      env: { SECRET_KEY },
    } = process;

    const {
      cookies: { token },
    } = req;

    const posts = await getPosts();
    if (token) {
      const value = await verifyToken(token, SECRET_KEY);
      return res.status(200).json({
        status: "success",
        message: "Post successfully get it",
        userId: value.userId,
        data: posts,
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Post successfully added",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
