const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: [true, "Employee ID is required"],
  },
  saleName: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
  serialNumber: {
    type: String,
  },
  amountPaid: {
    type: Number,
    required: [true, "Amount paid is required"],
  },
  category: {
    type: String,
  },
  orderStatus: {
    type: String,
    required: [true, "Order status is required"],
    enum: ["planning", "in-Progress", "delivered", "cancel"], // Restrict to these three choices
  },
  orderedAt: {
    type: Date,
    required: [true, "Order date is required"],
  },
  deliveredAt: {
    type: Date,
  },
  receiptPhoto: {
    type: String,
  },
  paymentStatus: {
    type: String,
    required: [true, "Payment status is required"],
    enum: ["pending", "completed", "prePayment", "cancel"], // Restrict to these three choices
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  customerName: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
});

const Sale = mongoose.model("Sale", productSchema);

module.exports = Sale;
