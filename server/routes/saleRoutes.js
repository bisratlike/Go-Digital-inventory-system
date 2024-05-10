const express = require("express");
const router = express.Router();
const saleController = require("../controllers/saleController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const upload = multer();
const Sale = require("../models/Sale");


// authMiddleware.authenticate,
// authMiddleware.authorize("salesManager"),

router.post(
  "/addsales",
  authMiddleware.authenticate,
  authMiddleware.authorize("salesManager"),
  upload.single("receiptPhoto"),
  saleController.addSales
);

router.put("/updateOrderStatus", saleController.updateOrderStatus);

module.exports = router;
