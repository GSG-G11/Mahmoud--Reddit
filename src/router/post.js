const router = require("express").Router();
const checkSignin = require("../middlewares/checkSignin");
const { addPost } = require("../controllers");

router.post("/post", checkSignin, addPost);

module.exports = router;
