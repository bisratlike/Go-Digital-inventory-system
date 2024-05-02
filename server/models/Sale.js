const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    ref: "Employee",
    required: [true, "Employee Id is required"],
  },
  productName: {
    type: String,
    required: [true, "Name of the product is required"],
  },
  price: {
    type: Number,
    required: [true, "Price of the product is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity of the product is required"],
  },
  serialNumber: {
    type: Number,
  },
  AmountPaid: {
    type: Number,
    required: [true, "Paid amound is required"],
  },
  category: {
    type: String,
  },
  orderStatus: {
    type: String,
    required: [true, "Order status is required"],
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
  },
  customerName: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Sale = new mongoose.model("Sale", productSchema);

module.exports = Sale;
