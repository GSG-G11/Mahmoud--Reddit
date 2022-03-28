const { getSignupPage, signup } = require("./auth/signupController");
const { getLoginPage, login } = require("./auth/loginController");
const { addPost } = require("./postsController");

module.exports = {
  getSignupPage,
  signup,
  getLoginPage,
  login,
  addPost,
};
