const router = require("express").Router();
const checkSignin = require("../middlewares/checkSignin");
const {
  getPosts,
  addPost,
  getAllComments,
  addComment,
} = require("../controllers");

router.post("/post", checkSignin, addPost);
router.get("/posts", getPosts);
router.post("/comments/:id", checkSignin, addComment);
router.get("/comment/:id", getAllComments);

module.exports = router;
