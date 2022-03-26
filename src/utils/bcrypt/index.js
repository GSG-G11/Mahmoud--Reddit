const bcrypt = require("bcrypt");

// eslint-disable-next-line no-undef
const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePassword = (password, hash) => bcrypt.compare(password, hash);
module.exports = {
  hashPassword,
  comparePassword,
};
