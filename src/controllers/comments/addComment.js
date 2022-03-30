const { addComment } = require("../../database/queries");
const { commentsSchema } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { description, post_id } = req.body;
    const { user_id } = req;
    // console.log(user_id);
    await commentsSchema.validateAsync({ description });
    await addComment(description, user_id, post_id);
    return res.status(201).json({
      status: "success",
      message: "Comment successfully added",
    });
  } catch (error) {
    if (error.details) {
      const allErrors = error.details.map((x) => x.message);
      return res.json(allErrors);
    }
    res.json(error);
  }
};
