const express = require("express");
const {
  userRegistration,
  createPaypalOrder,
  capturePaypalOrder,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user-registration", userRegistration);
router.post("/create-paypal-order", createPaypalOrder);
router.post("/capture-paypal-order", capturePaypalOrder);

module.exports = router;
