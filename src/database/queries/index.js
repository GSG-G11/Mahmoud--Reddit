const getUserByEmail = require("./signup/getUserByEmail");
const insertNewUser = require("./signup/insertNewUser");
const getUserInfo = require("./login/getUserInfo");
const addPost = require("./posts/addPost");
const getPosts = require("./posts/getPosts");
module.exports = {
  getUserByEmail,
  insertNewUser,
  getUserInfo,
  addPost,
  getPosts,
};
