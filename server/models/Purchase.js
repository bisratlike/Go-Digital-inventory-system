const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  purchaseName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  serialNumber: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  receiptPhoto: {
    type: String,
  },
  vendorId: {
    type: String,
    ref: "Vendor",
  },
  vendorName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
