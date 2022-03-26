const router = require("express").Router();
const signUp = require("../controllers/auth/signup");
const setCookie = require("../middlewares/setCookie");

router.post("/signup", signUp, setCookie);

module.exports = router;
