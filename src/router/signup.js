const router = require("express").Router();
const { getSignupPage, signup } = require("../controllers");
const setCookie = require("../middlewares/setCookie");

router.get("/signup", getSignupPage);
router.post("/signup", signup, setCookie);

module.exports = router;
