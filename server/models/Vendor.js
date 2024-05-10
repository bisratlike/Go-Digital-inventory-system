const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: [true, 'Vendor name is required'],
  },
  phoneNumber: {
    type: String,
  },
  vendorsEmail: {
    type: String,
    required: [true, 'Vendor email is required'],
  },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
