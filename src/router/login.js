const router = require("express").Router();
const { getLoginPage, login } = require("../controllers");
const setCookie = require("../middlewares/setCookie");

router.get("/login", getLoginPage);
router.post("/login", login, setCookie);

module.exports = router;
