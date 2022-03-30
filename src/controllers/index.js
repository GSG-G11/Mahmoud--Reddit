const { getSignupPage, signup } = require("./auth/signupController");
const { getLoginPage, login, getUser } = require("./auth/loginController");
const { addPost, getPosts } = require("./postsController");
const { getAllComments } = require("./comments");
module.exports = {
  getSignupPage,
  signup,
  getLoginPage,
  login,
  addPost,
  getPosts,
  getUser,
  getAllComments,
};
