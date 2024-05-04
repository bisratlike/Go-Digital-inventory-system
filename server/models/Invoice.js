const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true
  },
  products: [
    {
      saleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sale",
        required: true
      },
      saleName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  total: {
    type: Number,
    required: true
  }
});

// Middleware to populate products field before saving
invoiceSchema.pre('save', async function(next) {
  try {
    // Populate each product in the products array
    await Promise.all(this.products.map(async (product) => {
      const sale = await mongoose.model('Sale').findById(mongoose.Types.ObjectId(product.saleId));
      if (!sale) {
        throw new Error('Sale not found');
      }
      product.saleName = sale.saleName;
      product.price = sale.price;
    }));

    // Calculate total based on product prices and quantities
    this.total = this.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    next();
  } catch (error) {
    next(error);
  }
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
