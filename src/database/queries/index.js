const getUserByEmail = require("./signup/getUserByEmail");
const insertNewUser = require("./signup/insertNewUser");
const getUserInfo = require("./login/getUserInfo");
const addPost = require("./posts/addPost");
module.exports = {
  getUserByEmail,
  insertNewUser,
  getUserInfo,
  addPost,
};
