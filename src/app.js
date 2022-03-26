const express = require("express");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const app = express();
const { join } = require("path");
const router = require("./router/signup");
app.disable("x-powered-by");

app.use([
  compression(),
  cookieParser(),
  express.urlencoded({ extended: false, limit: "5mb" }),
  express.json({ limit: "50mb" }),
]);
app.use(express.static(join(__dirname, "..", "public")));
app.use(router);
module.exports = app;
