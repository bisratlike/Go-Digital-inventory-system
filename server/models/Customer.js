const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerType: {
    type: String,
    enum: ["business", "individual"], // Restrict to these two choices
    required: [true, "Customer type is required"],
  },
  fullName: {
    mr: { type: String },
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
  },
  companyName: {
    type: String,
  },
  customerEmail: {
    type: String,
    required: [true, "Customer email is required"],
  },
  customerPhone: {
    type: String,
    required: [true, "Customer phone number is required"],
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
