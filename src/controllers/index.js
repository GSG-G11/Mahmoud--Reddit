const { getSignupPage, signup } = require("./auth/signupController");
const { getLoginPage, login, getUser } = require("./auth/loginController");
const { addPost, getPosts, deletePost } = require("./postsController");
const { getAllComments, addComment } = require("./comments");
const { client } = require("./errors/404");
const { server } = require("./errors/500");
module.exports = {
  getSignupPage,
  signup,
  getLoginPage,
  login,
  addPost,
  getPosts,
  getUser,
  getAllComments,
  addComment,
  client,
  server,
  deletePost,
};
