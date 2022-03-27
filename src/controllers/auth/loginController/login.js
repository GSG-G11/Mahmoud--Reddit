const { getUserInfo } = require("../../../database/queries");
const { comparePassword, loginSchema } = require("../../../utils");

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginSchema.validateAsync(
      { email, password },
      {
        abortEarly: false,
      }
    );
    const user = await getUserInfo(email);
    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "User does not already exists",
      });
    }
    const checkUser = await comparePassword(password, user.password);
    if (!checkUser) {
      return res.status(401).json({
        status: "error",
        message: "Email or Password is wrong!",
      });
    }
    req.userId = user.id;
    next();
  } catch (error) {
    if (error.details) {
      const allErrors = error.details.map((x) => x.message);
      return res.json(allErrors);
    }
    res.json(error);
  }
};
