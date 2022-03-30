const { deletePost } = require("../../database/queries");

module.exports = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    await deletePost(id);
    return res.status(201).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    res.json(error);
  }
};
