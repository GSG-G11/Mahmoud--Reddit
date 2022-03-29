const router = require("express").Router();
const checkSignin = require("../middlewares/checkSignin");
const { getPosts, addPost } = require("../controllers");

router.post("/post", checkSignin, addPost);
router.get("/posts", getPosts);

// router.post("/posts/:postId/comments", checkSignin, (req, res) => {
//   const { postId } = req.params;
//   const { userId } = req;
//   const { comment } = req.body;
//   createComment(postId, userId, comment)
//     .then(() => {
//       res.redirect(`/posts/${postId}`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;
