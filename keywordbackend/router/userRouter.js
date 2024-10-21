const express = require("express");
const {
  userRegistration,
  userLogin,
  getUserDetails,
  editUserDetails,
  changePassword,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user-registration", userRegistration);
router.post("/userLogin", userLogin);
router.get("/getUserDetails/:userId", getUserDetails);
router.put("/editUserDetails/:userId", editUserDetails);
router.put("/changePassword/:userId", changePassword);

module.exports = router;
