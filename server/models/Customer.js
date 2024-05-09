const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerType: {
    type: String,
    enum: ["business", "individual"], // Restrict to these two choices
    required: [true, "Customer type is required"],
  },

  customerName: { type: String},
  companyName: {
    type: String,
  },
  customerEmail: {
    type: String,
    required: [true, "Customer email is required"],
    unique:true
  },
  customerPhone: {
    type: String,
    required: [true, "Customer phone number is required"],
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
