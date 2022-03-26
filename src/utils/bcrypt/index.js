const bcrypt = require("bcrypt");

// eslint-disable-next-line no-undef
const hashPassword = async (password) => bcrypt.hash(password, 10);

const comparePassword = async (password, hash) =>
  bcrypt.compare(password, hash);
module.exports = {
  hashPassword,
  comparePassword,
};
