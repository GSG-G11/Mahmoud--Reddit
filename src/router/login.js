const router = require("express").Router();
const login = require("../controllers/auth/login");
const setCookie = require("../middlewares/setCookie");

router.get("/login", login, setCookie);

module.exports = router;
