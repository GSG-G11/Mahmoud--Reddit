const { getAllComments } = require("../../database/queries");

module.exports = async (req, res) => {
  try {
    const { posts_Id } = req.body;
    const comments = await getAllComments(posts_Id);
    if (comments.length !== 0) {
      return res.status(200).json({
        status: "comments successfully get it",
        comments,
      });
    }
    throw new Error("No comments found");
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "No comments found",
    });
  }
};
