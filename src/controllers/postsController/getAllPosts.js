const { getPosts } = require("../../database/queries");

module.exports = async (req, res) => {
  try {
    const posts = await getPosts();
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
