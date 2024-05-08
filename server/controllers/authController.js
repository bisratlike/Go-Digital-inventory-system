// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");
const Employee = require("../models/Employee");

exports.signup = async (req, res) => {
  // Validate user input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // Create a new user record
  const employee = new Employee({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role,
    types: req.body.types,
  });

  try {
    await employee.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  // Validate user credentials
  const employee = await Employee.findOne({ email: req.body.email });
  if (!employee) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const validPassword = await bcrypt.compare(
    req.body.password,
    employee.password
  );
  if (!validPassword) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { employeeId: employee._id, role: employee.role },
    process.env.jwtWebTokenKey,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
};

const sendResetPasswordEmail = (userEmail, resetPasswordToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const resetPasswordLink = `https://yourapp.com/reset-password?token=${resetPasswordToken}`;

  const mailOptions = {
    from: "figmagodigital@gmail.com",
    to: userEmail,
    subject: "Reset Your Password",
    html: `<p>Click <a href="${resetPasswordLink}">here</a> to reset your password.</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending reset password email:", error);
    } else {
      console.log("Reset password email sent:", userEmail, info.response);
    }
  });
};
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const employee = await Employee.findOne({ email });

    if (!employee) {
      return res
        .status(400)
        .json({ error: "User with this email does not exist" });
    }

    const resetPasswordToken = jwt.sign(
      { employeeId: employee._id },
      process.env.jwtWebTokenKey,
      {
        expiresIn: "1h",
      }
    );
    const resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour in milliseconds

    // Save the token and expiration time in the user model
    employee.resetPasswordToken = resetPasswordToken;
    employee.resetPasswordExpires = resetPasswordExpires;
    await employee.save();

    // Send reset password email
    sendResetPasswordEmail(employee.email, resetPasswordToken);

    res.json({
      message: "Password reset email sent. Check your email for instructions.",
      user: employee.email,
    });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const employee = await Employee.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!employee) {
      return res
        .status(400)
        .json({ error: "Invalid or expired reset password token" });
    }

    // Update user's password and clear the reset password fields
    employee.password = newPassword;
    employee.resetPasswordToken = null;
    employee.resetPasswordExpires = null;
    await employee.save();

    res.json({
      message:
        "Password reset successful. You can now log in with your new password.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
