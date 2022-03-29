const { getUserName } = require("../../../database/queries");

module.exports = async (req, res) => {
  try {
    const { userId } = req;
    const info = await getUserName(userId);
    const { name } = info;
    res.status(202).json({
      message: "User exists",
      name,
    });
  } catch (error) {
    res.json(error);
  }
};
