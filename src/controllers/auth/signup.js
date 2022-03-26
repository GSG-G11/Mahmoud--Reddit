const { hashPassword, signUpSchema } = require("../../utils");
const { getUserByEmail, insertNewUser } = require("../../database/queries");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    await signUpSchema.validateAsync(
      { name, email, password },
      { abortEarly: false }
    );
    const checkEmail = await getUserByEmail(email);
    if (checkEmail) {
      return res.status(401).json({
        status: "error",
        message: "User already exict",
      });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await insertNewUser(name, email, hashedPassword);
    const userId = newUser.rows[0].id;
    req.userId = userId;
    next();
  } catch (error) {
    if (error.details) {
      const allErrors = error.details.map((x) => x.message);
      return res.json(allErrors);
    }
    res.json(error);
  }
};
