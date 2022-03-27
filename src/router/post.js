const router = require("express").Router();
const checkSignin = require("../middlewares/checkSignin");

router.post("/post", checkSignin);

module.exports = router;
