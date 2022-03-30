const router = require("express").Router();
const clearCookie = require("../middlewares/clearCookie");
router.post("/logout", clearCookie);
module.exports = router;
