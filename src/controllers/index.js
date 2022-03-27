const { getSignupPage, signup } = require("./auth/signupController");
const { getLoginPage, login } = require("./auth/loginController");

module.exports = {
  getSignupPage,
  signup,
  getLoginPage,
  login,
};
