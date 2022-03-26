const router = require("express").Router();
const login = require("./login");
const signUp = require("./signup");

router.use(signUp);
router.use(login);

module.exports = router;
