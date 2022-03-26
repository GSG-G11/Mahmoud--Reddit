const { signToken } = require("../utils");
require("dotenv").config();
module.exports = async (req, res) => {
  try {
    const { SECRET_KEY } = process.env;
    const { userId } = req;
    const token = await signToken({ userId }, SECRET_KEY);
    return res
      .cookie("token", token, {
        maxAge: 300000000,
        httpOnly: true,
        sameSite: true,
      })
      .status(201)
      .redirect("/posts");
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
