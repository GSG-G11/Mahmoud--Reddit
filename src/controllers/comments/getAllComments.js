const { getAllComments } = require("../../database/queries");

module.exports = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const comments = await getAllComments(id);
    if (comments.length !== 0) {
      return res.status(200).json({
        message: "comments successfully get it",
        comments,
      });
    }
    return res.status(204).json({
      message: "No comments found",
    });
  } catch (error) {
    return res.status(204).json({
      status: "error",
      message: "Internet Server error",
    });
  }
};
