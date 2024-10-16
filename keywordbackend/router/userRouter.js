const express = require("express");
const {
  userRegistration,
  userLogin,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user-registration", userRegistration);
router.post("/userLogin", userLogin);

module.exports = router;
