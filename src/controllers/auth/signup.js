const { hashPassword, signToken, signUpSchema } = require("../../utils");
const { getUserByEmail, insertNewUser } = require("../../database/queries");
require("dotenv").config();

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const validateInput = signUpSchema.validate({ name, email, password });
    if (validateInput.error) {
      throw validateInput.error.details[0].message;
    }
    const checkEmail = await getUserByEmail(email);
    if (checkEmail) {
      throw "User already exists";
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await insertNewUser(name, email, hashedPassword);
    const tokenId = newUser.rows[0].id;
    const payload = { tokenId };
    const token = await signToken(payload, process.env.SECRET_KEY);
    res
      .cookie("token", token, {
        maxAge: 300000000,
        httpOnly: true,
        sameSite: true,
      })
      .status(201)
      .redirect("/posts");
  } catch (error) {
    res.json(error);
  }
};
