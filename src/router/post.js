const router = require("express").Router();
const checkSignin = require("../middlewares/checkSignin");
const { addPost } = require("../controllers");
const { getPosts } = require("../controllers");

router.post("/post", checkSignin, addPost);
router.get("/posts", getPosts);

module.exports = router;
