const { hashPassword, signUpSchema } = require("../../utils");
const { getUserByEmail, insertNewUser } = require("../../database/queries");

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const validateInput = signUpSchema.validate({ name, email, password });
    if (validateInput.error) {
      throw validateInput.error.details[0].message;
    }
    let checkEmail;
    await getUserByEmail(email).then((res) => (checkEmail = res.rows[0]));
    if (checkEmail) {
      throw "Email already exict";
    }
    let hashedPassword;
    await hashPassword(password).then((res) => (hashedPassword = res));
    const newUser = await insertNewUser(name, email, hashedPassword);
    req.userId = newUser.rows[0].id;
    next();
  } catch (error) {
    console.log(error);
  }
};
