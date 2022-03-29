const router = require("express").Router();
const login = require("./login");
const signUp = require("./signup");
const post = require("./post");
const logout = require("./logout");

router.use(signUp);
router.use(login);
router.use(post);
router.use(logout);

module.exports = router;
