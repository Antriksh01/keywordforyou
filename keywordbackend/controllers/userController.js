const express = require("express");
const multer = require("multer");
const { db } = require("../connect");
const moment = require("moment-timezone");
const bcrypt = require("bcrypt");
const paypal = require("@paypal/checkout-server-sdk");
const requestIp = require("request-ip");
const { client } = require("../paypal");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const userRegistration = (req, res) => {
  const dateTime = moment().tz("Asia/Kolkata").format("DD-MM-YYYY HH:mm:ss");
  try {
    const {
      fullname,
      email,
      mobile,
      dob,
      password,
      country,
      state,
      city,
      address,
      postcode,
      plan,
      charges,
      approvalStatus,
      paymentStatus,
    } = req.body;

    let expiryDate;

    if (plan === "monthly") {
      expiryDate = moment(dateTime, "DD-MM-YYYY HH:mm:ss")
        .add(30, "days")
        .format("DD-MM-YYYY HH:mm:ss");
    } else {
      expiryDate = moment(dateTime, "DD-MM-YYYY HH:mm:ss")
        .add(365, "days")
        .format("DD-MM-YYYY HH:mm:ss");
    }

    const selectQuery =
      "SELECT * FROM customers WHERE EmailAddress = ? AND Mobile = ?";
    db.query(selectQuery, [email, mobile], (err, result) => {
      if (result && result.length > 0) {
        res
          .status(400)
          .json({ success: false, message: "User already exists" });
      } else {
        const latestIDQuery =
          "SELECT LoginID FROM customers ORDER BY AddedDate DESC LIMIT 1";
        db.query(latestIDQuery, (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ success: false, message: err.message });
          }

          let newLoginID = "userk4u00000001";
          if (result && result.length > 0) {
            const latestLoginID = result[0].LoginID;
            const numericPart = parseInt(latestLoginID.slice(7)) + 1;
            newLoginID = "userk4u" + numericPart.toString().padStart(8, "0");
          }

          const saltRounds = 10;
          const hashedPassword = bcrypt.hashSync(password, saltRounds);
          // Insert the new user data into the database
          const insertQuery =
            "INSERT INTO customers (LoginID, EmailAddress, Mobile, Password, Name, dob, Address, City, State, postcode, Country, ApprovalStatus, AddedDate, Membership, charges, Pstatus, membershipstartdate, MembershipExpiryDate) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?, ?)";
          const insertParams = [
            newLoginID,
            email,
            mobile,
            hashedPassword,
            fullname,
            dob,
            address,
            city,
            state,
            postcode,
            country,
            approvalStatus,
            dateTime,
            plan,
            charges,
            paymentStatus,
            dateTime,
            expiryDate,
          ];
          db.query(insertQuery, insertParams, (err, result) => {
            if (err) {
              res.status(400).json({ success: false, message: err.message });
            } else {
              res.status(200).json({
                success: true,
                message: "Data added successfully",
                loginID: newLoginID,
              });
            }
          });
        });
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    db.query(
      `SELECT * FROM customers WHERE EmailAddress = ?`,
      [email],
      (err, result) => {
        if (err) {
          // logger.registrationLogger.log("error", "Internal server error");
          return res.status(500).json({
            success: false,
            message: "Internal server error",
          });
        }
        if (result.length === 0) {
          // logger.registrationLogger.log("error", "Email is not registered please contact team for further assistance");
          return res.status(404).json({
            success: false,
            message: "Email is not registered. Please sign up first.",
          });
        }

        const user = result[0];

        const match = bcrypt.compareSync(password, user.Password);
        if (!match) {
          // logger.registrationLogger.log("error", "Invalid password");
          return res.status(401).json({
            success: false,
            message: "Invalid password",
          });
        }

        // Optionally check employee status if needed
        // if (user.employee_status !== "Approved") {
        //   return res.status(403).json({
        //     success: false,
        //     message: "Your email is not approved. Please contact the team for further assistance.",
        //   });
        // }

        const token = JWT.sign({ id: user.LoginID }, process.env.JWT_SECRET, {
          expiresIn: "12h",
        });

        // logger.registrationLogger.log("info", "Login successful");
        return res.status(200).json({
          success: true,
          message: "Login successful",
          user: { ...user, token: token },
        });
      }
    );
  } catch (error) {
    // logger.registrationLogger.log("error", "Internal server error");
    return res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
};

const getUserDetails = (req, res) => {
  try {
    const userId = req.params.userId;
    const selectQuery = "SELECT * FROM customers WHERE LoginID = ?";
    db.query(selectQuery, userId, (err, result) => {
      if (err) {
        res.status(400).json({ success: false, message: err.message });
      }
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const editUserDetails = (req, res) => {
  try {
    const userId = req.params.userId;
    const {
      fullName,
      email,
      youtubeName,
      youtubeLink,
      facebookLink,
      instagramLink,
      twitterLink,
    } = req.body;

    const getQuery = `SELECT * FROM customers WHERE LoginID = ?`;
    db.query(getQuery, userId, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }

      if (result && result.length > 0) {
        const updateFields = [];
        const updateValues = [];

        if (fullName) {
          updateFields.push("Name = ?");
          updateValues.push(fullName);
        }

        if (email) {
          updateFields.push("EmailAddress = ?");
          updateValues.push(email);
        }

        if (youtubeName) {
          updateFields.push("channel_name = ?");
          updateValues.push(youtubeName);
        }

        if (youtubeLink) {
          updateFields.push("channel_link = ?");
          updateValues.push(youtubeLink);
        }

        if (facebookLink) {
          updateFields.push("facebook = ?");
          updateValues.push(facebookLink);
        }
        if (instagramLink) {
          updateFields.push("instagram = ?");
          updateValues.push(instagramLink);
        }
        if (twitterLink) {
          updateFields.push("twitter = ?");
          updateValues.push(twitterLink);
        }

        const updateQuery = `UPDATE customers SET ${updateFields.join(
          ", "
        )} WHERE LoginID = ?`;

        db.query(updateQuery, [...updateValues, userId], (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: "Failed to update details",
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Details updated successfully",
            });
          }
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

const changePassword = async (req, res) => {
  const userId = req.params.userId;
  const { currentPass, newPassword } = req.body;

  // Check if currentPass and newPassword are provided
  if (!currentPass || !newPassword) {
    return res.status(400).json({
      success: false,
      message: "Both old and new passwords are required",
    });
  }

  try {
    const selectQuery = "SELECT * FROM customers WHERE LoginID = ?";

    // Fetch user details from the database
    db.query(selectQuery, userId, async (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Database error" });
      }

      // Check if user exists
      if (result.length === 0) {
        return res
          .status(400)
          .json({ success: false, message: "User not found" });
      }

      const user = result[0];

      // Check if user.password is valid
      if (!user.Password) {
        return res
          .status(500)
          .json({ success: false, message: "User password not found" });
      }

      // Log currentPass and user.password for debugging (remove this in production)
      console.log("Old Password:", currentPass);
      console.log("User Password (Hashed):", user.Password);

      // Check if the old password matches
      const isMatch = await bcrypt.compare(currentPass, user.Password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect old password" });
      }

      // Generate salt and hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      const updateQuery = "UPDATE customers SET password = ? WHERE LoginID = ?";

      // Update the password in the database
      db.query(updateQuery, [hashedPassword, userId], (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ success: false, message: "Error updating password" });
        }

        // Successful password change response
        res
          .status(200)
          .json({ success: true, message: "Password changed successfully" });
      });
    });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  userRegistration,
  userLogin,
  getUserDetails,
  editUserDetails,
  changePassword,
};
