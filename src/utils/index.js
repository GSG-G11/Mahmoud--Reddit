const { hashPassword, comparePassword } = require("./bcrypt");
const { verifyToken, signToken } = require("./jwt");
const comments = require("./validation/comments");
const posts = require("./validation/posts");
const login = require("./validation/login");
const signUpSchema = require("./validation/signup");

module.exports = {
  hashPassword,
  comparePassword,
  verifyToken,
  signToken,
  comments,
  posts,
  login,
  signUpSchema,
};
