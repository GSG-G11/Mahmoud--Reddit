const { addPost } = require("../../database/queries");
const { postsSchema } = require("../../utils");
module.exports = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { userId } = req;
    await postsSchema.validateAsync(
      { title, description },
      { abortEarly: false }
    );
    await addPost(title, description, userId);
    return res.status(201).json({
      status: "success",
      message: "Post successfully added",
    });
  } catch (error) {
    if (error.details) {
      const allErrors = error.details.map((x) => x.message);
      console.log(allErrors);
      return res.json(allErrors);
    }
    res.json(error);
  }
};
