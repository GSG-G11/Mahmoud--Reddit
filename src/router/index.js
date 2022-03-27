const router = require("express").Router();
const login = require("./login");
const signUp = require("./signup");
const post = require("./post");

router.use(signUp);
router.use(login);
router.use(post);

module.exports = router;
