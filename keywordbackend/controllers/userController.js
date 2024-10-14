const express = require("express");
const multer = require("multer");
const { db } = require("../connect");
const moment = require("moment-timezone");
const bcrypt = require("bcrypt");
const paypal = require("@paypal/checkout-server-sdk");
const requestIp = require("request-ip");
const { client } = require("../paypal");

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
            "INSERT INTO customers (LoginID, EmailAddress, Mobile, Password, Name, dob, Address, City, State, postcode, Country, ApprovalStatus, AddedDate, Membership, charges, Pstatus, membershipstartdate, MembershipExpiryDate) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?)";
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

const createPaypalOrder = async (req, res) => {
  try {
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00", // Set your price dynamically
          },
        },
      ],
    });

    const order = await client().execute(request);

    res.json({
      id: order.result.id,
      status: order.result.status,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating PayPal order" });
  }
};

const capturePaypalOrder = async (req, res) => {
  try {
    const { orderID } = req.body;
    const clientIp = requestIp.getClientIp(req); // Get client IP address

    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    // Execute the capture request
    const capture = await client().execute(request);

    if (capture.result.status === "COMPLETED") {
      // Extract required data from the capture result
      const transactionID = capture.result.id;
      const amount = capture.result.purchase_units[0].amount.value;
      const currency = capture.result.purchase_units[0].amount.currency_code;
      const paymentMethod = capture.result.payer.payment_method || "PayPal"; // Usually PayPal
      const transactionStatus = capture.result.status;

      // Insert transaction data into the MySQL database
      try {
        await db.query(
          "INSERT INTO transactions (transactionID, currency, paymentMethod, amount, transactionStatus, ipAddress) VALUES (?, ?, ?, ?, ?, ?)",
          [
            transactionID,
            currency,
            paymentMethod,
            amount,
            transactionStatus,
            clientIp,
          ]
        );

        // Respond with success and transaction data
        res.json({
          status: capture.result.status,
          id: capture.result.id,
        });
      } catch (dbError) {
        // Handle MySQL insertion errors
        console.error("Database Insertion Error:", dbError);
        res.status(500).json({ error: "Database Insertion Error" });
      }
    } else {
      // If the payment was not completed, return an error
      res.status(400).json({ error: "Payment not completed" });
    }
  } catch (error) {
    // Handle any errors during the PayPal capture request
    console.error("Error capturing PayPal order:", error);
    res
      .status(500)
      .json({ success: false, message: "Error capturing PayPal order" });
  }
};

module.exports = { userRegistration, createPaypalOrder, capturePaypalOrder };
