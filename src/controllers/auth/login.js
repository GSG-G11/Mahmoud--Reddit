const { getUserByEmail } = require("../../database/queries");
const { comparePassword, signToken, loginSchema } = require("../../utils");

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkValidate = await loginSchema.validateAsync(
      { email, password },
      {
        abortEarly: false,
      }
    );
    // const user = await getUserByEmail(email);
    console.log(checkValidate, 1);
    // if (!user) {
    //   return res.status(401).json({
    //     status: "error",
    //     message: "User does not already exists",
    //   });
    // }
    // let checkUser;
    // await comparePassword(password, user.password).then(
    //   (data) => (checkUser = data)
    // );
    // if (!checkUser) {
    //   throw "User or Password is wrong!";
    // }
    // req.user = {
    //   id: user.id,
    //   name: user.name,
    //   email: user.email,
    // };
    // next();
  } catch (error) {
    // console.log(error);
    res.json({ error });
  }
};
