const getUserByEmail = require("./signup/getUserByEmail");
const insertNewUser = require("./signup/insertNewUser");
const getUserInfo = require("./login/getUserInfo");
const addPost = require("./posts/addPost");
const getPosts = require("./posts/getPosts");
const addComment = require("./comment/addComment");
const getUserName = require("./login/getUserName");
const getAllComments = require("./comment/getAllComments");

module.exports = {
  getUserByEmail,
  insertNewUser,
  getUserInfo,
  addPost,
  getPosts,
  addComment,
  getUserName,
  getAllComments,
};
