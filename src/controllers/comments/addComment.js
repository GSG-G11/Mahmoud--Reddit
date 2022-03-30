const { addComment } = require("../../database/queries");
const { commentsSchema } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const {
      body: { description },
    } = req;
    const { user_id } = req;
    const {
      params: { id },
    } = req;
    await commentsSchema.validateAsync({ description });
    const addedComment = await addComment(description, user_id, id);
    return res.status(201).json({
      message: "Comment successfully added",
      comment: addedComment,
    });
  } catch (error) {
    if (error.details) {
      const allErrors = error.details.map((x) => x.message);
      return res.json(allErrors);
    }
    res.json(error);
  }
};
