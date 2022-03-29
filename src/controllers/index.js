const { getSignupPage, signup } = require("./auth/signupController");
const { getLoginPage, login, getUser } = require("./auth/loginController");
const { addPost } = require("./postsController");
const { getPosts } = require("./postsController");

module.exports = {
  getSignupPage,
  signup,
  getLoginPage,
  login,
  addPost,
  getPosts,
  getUser,
};
