const { hashPassword, signToken, signUpSchema } = require("../../utils");
const { getUserByEmail, insertNewUser } = require("../../database/queries");
require("dotenv").config();

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await signUpSchema.validateAsync(
      { name, email, password },
      { abortEarly: false }
    );
    const checkEmail = await getUserByEmail(email);
    if (checkEmail) {
      return res.json({ message: "User already exict" });
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
    if (error.details) {
      const allErrors = error.details.map((x) => x.message);
      res.json(allErrors);
    }
    res.json(error);
  }
};
