const { getSignupPage, signup } = require("./auth/signupController");
const { getLoginPage, login } = require("./auth/loginController");
const { addPost } = require("./auth/postsController");

module.exports = {
  getSignupPage,
  signup,
  getLoginPage,
  login,
  addPost,
};
