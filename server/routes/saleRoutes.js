const express = require("express");
const router = express.Router();
const saleController = require("../controllers/saleController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Sale = require("../models/Sale");
const jwt = require("jsonwebtoken");

// authMiddleware.authenticate,
// authMiddleware.authorize("salesManager"),

router.post(
  "/addsales",
  authMiddleware.authenticate,
  authMiddleware.authorize("salesManager"),
  upload.single("receiptPhoto"),
  async (req, res) => {
    try {
      const token = req.header("Authorization").split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.jwtWebTokenKey);
      const employeeId = decodedToken._id;
      console.log(req.file)
      const fileBuffer = req.file.buffer;
  const photoBase64 = fileBuffer.toString('base64');
      const {
        saleName,
        price,
        quantity,
        serialNumber,
        amountPaid,
        category,
        orderStatus,
        orderedAt,
        deliveredAt,
        paymentStatus,
        customerId,
      } = req.body;


      const sale = new Sale({
        employeeId,
        saleName,
        price,
        quantity,
        serialNumber: "",
        amountPaid,
        category,
        orderStatus: "planning",
        orderedAt,
        deliveredAt,
        photoBase64,
        paymentStatus: "pending",
        customerId,
      });

      await sale.save();
      res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.put("/updateOrderStatus", saleController.updateOrderStatus);

module.exports = router;
