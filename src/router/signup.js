const router = require("express").Router();
const signUp = require("../controllers/auth/signup");

router.post("/signup", signUp);

module.exports = router;
