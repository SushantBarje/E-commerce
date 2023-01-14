var express = require("express");
var router = express.Router();

var controller = require("../controllers/userController");

router.post("/login", async function (req, res, next) {
  const response = await controller.verifyLogin(req.body);
  res
    .status(response.statusCode)
    .json({ error: response.error, message: response.message });
});

router.post("/signup", async function (req, res, next) {
  const response = await controller.signUpUser(req.body);
  res
    .status(response.statusCode)
    .json({ error: response.error, message: response.message });
});

router.get("/refresh", async function (req, res, next) {
  const response = await controller.getRefreshToken(req.body);
  res
    .status(response.statusCode)
    .json({ error: response.error, message: response.message });
});

module.exports = router;
