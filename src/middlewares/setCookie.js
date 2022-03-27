const { signToken } = require("../utils");
require("dotenv").config();
module.exports = async (req, res) => {
  try {
    const {
      env: { SECRET_KEY },
    } = process;
    const { userId } = req;
    const token = await signToken({ userId }, SECRET_KEY);
    res
      .cookie("token", token, {
        maxAge: 300000000,
        httpOnly: true,
        sameSite: true,
      })
      .status(201)
      .json({
        status: "success",
        message: "User successfully signed up",
      });
  } catch (err) {
    console.log(1);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
