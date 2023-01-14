var express = require("express");
var router = express.Router();

const auth = require("../middleware/auth");

var customerController = require("../controllers/customerController");

router.get("/products", auth.verfiyToken, async function (req, res, next) {
  const response = await customerController.getProductsList();
  res
    .status(response.statusCode)
    .json({ error: response.error, message: response.message });
});

router.get("/product/:id", auth.verfiyToken, async function (req, res, next) {
  const response = await customerController.getProductById(req.params.id);
  res
    .status(response.statusCode)
    .json({ error: response.error, message: response.message });
});

router.post("/product/:id/order", auth.verfiyToken, async function (req, res, next) {
  const response = await customerController.orderProduct(req.params.id, req.user.username);
  res
    .status(response.statusCode)
    .json({ error: response.error, message: response.message });
});

router.post("/myorder", auth.verfiyToken, async function (req, res, next) {});

module.exports = router;
