const express = require("express");
const router = express.Router();
const db = require("../db");

// ================= LOGIN =================

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  const sql = "SELECT * FROM users WHERE Email = ? AND Password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database error.",
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    res.json({
      success: true,
      role: result[0].Role,
      user: {
        id: result[0].UserID,
        name: result[0].Name,
        email: result[0].Email,
      },
    });
  });
});

// ================= SIGN UP =================

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please complete all fields.",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters long.",
    });
  }

  const checkUser = "SELECT * FROM users WHERE Email = ?";

  db.query(checkUser, [email], (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database error.",
      });
    }

    if (result.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const insertUser =
      "INSERT INTO users (Name, Email, Password, Role) VALUES (?, ?, ?, ?)";

    db.query(insertUser, [name, email, password, "user"], (err) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Unable to create account.",
        });
      }

      res.status(201).json({
        success: true,
        message: "Account created successfully.",
      });
    });
  });
});

module.exports = router;
