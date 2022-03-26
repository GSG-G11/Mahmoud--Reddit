const router = require("express").Router();
const login = require("../controllers/auth/login");

router.get("/login", login);

module.exports = router;
