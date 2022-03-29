const router = require("express").Router();
const { getLoginPage, login, getUser } = require("../controllers");
const setCookie = require("../middlewares/setCookie");
const checkSignin = require("../middlewares/checkSignin");

router.get("/login", getLoginPage);
router.post("/login", login, setCookie);
router.get("/getUserName", checkSignin, getUser);
module.exports = router;
