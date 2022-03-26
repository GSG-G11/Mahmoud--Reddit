const bcrypt = require("bcrypt");

// eslint-disable-next-line no-undef
const hashPassword = bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.log(err, " from hashpassword");
  } else {
    return hash;
  }
});

const comparePassword = (password, hash) => bcrypt.compare(password, hash);
module.exports = {
  hashPassword,
  comparePassword,
};
