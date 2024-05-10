const Purchase = require('../models/Purchase');
const Vendor = require('../models/Vendor');
const jwt = require('jsonwebtoken');

class PurchaseController {
  // Creates a purchase
  static async createPurchase(req, res) {
    const { id } = req.params; // Vendor's Id

    try {
      // Get the authorized user ID
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.jwtWebTokenKey);
      const employeeId = decoded.employeeId;

      // Get the vendor ID
      const existingVendor = await Vendor.findOne({ id });

      if (!existingVendor) {
        return res
          .status(200)
          .json({ error: 'Vendor do not exist, Please add your vendor.' });
      }

      const vendorId = existingVendor._id;

      const newPurchase = await Purchase.create({
        employeeId: employeeId,
        purchaseName: req.body.purchaseName,
        quantity: req.body.quantity,
        serialNumber: req.body.serialNumber,
        price: req.body.price,
        category: req.body.category,
        receivedAt: req.body.receivedAt,
        receiptPhoto: req.body.receiptPhoto,
        vendorId: vendorId,
        vendorName: req.body.vendorName,
        phoneNumber: existingVendor.phoneNumber,
        vendorsEmail: existingVendor.vendorsEmail,
        description: req.body.description,
      });

      return res.status(201).json(newPurchase);
    } catch (error) {
      console.error(`Error occured while Creating a vendor: ${error.message}`);
      return res.status(500).json({ error: 'An error occured while creating a vendor.' });
    }
  }

  // Get a single purchase
  static async getPurchase(req, res) {
    const { id } = req.params;

    try {
      const purchase = await Purchase.findOne({ id });

      if (!purchase) {
        return res.status(404).json({ error: 'Purchase not found' });
      }

      return res.status(200).json(purchase);
    } catch (error) {
      console.error(`Error occured while gettting a purchase: ${error.message}`);
      return res.status(500).json({ error: 'An error occured while getting a purchase' });
    }
  }

  // Get all purchases
  static async getAllPurchases(req, res) {
    try {
      const purchases = await Purchase.find({});

      if (!purchases) {
        return res.status(404).json({ error: 'No purchases are found' });
      }

      return res.status(200).json(purchases);
    } catch (error) {
      console.error(`Error occured while getting all purchases: ${error.message}`);
      return res
        .status(500)
        .json({ error: 'An error occured while getting all purchases' });
    }
  }

  // Update already made purchase
  static async updatePurchase(req, res) {
    const { id } = req.params;

    try {
      // Get the vendor ID
      const existingVendor = await Vendor.findOne({ id });

      if (!existingVendor) {
        return res
          .status(200)
          .json({ error: 'Vendor do not exist, Please add your vendor.' });
      }

      const updatedPurchase = await Purchase.findOneAndUpdate(
        id,
        {
          purchaseName: req.body.purchaseName,
          quantity: req.body.quantity,
          serialNumber: req.body.serialNumber,
          price: req.body.price,
          category: req.body.category,
          receivedAt: req.body.receivedAt,
          receiptPhoto: req.body.receiptPhoto,
          vendorName: req.body.vendorName,
          phoneNumber: existingVendor.phoneNumber,
          vendorsEmail: existingVendor.vendorsEmail,
          description: req.body.description,
        },
        { new: true }
      );

      if (!updatedPurchase) {
        return res.status(404).json({ error: 'Purchase is not found' });
      }

      return res.status(200).json(updatedPurchase);
    } catch (error) {
      console.error(`Error occured while updating a vendor: ${error.message}`);
      return res
        .status(500)
        .json({ error: 'An error occured while updating a purchase' });
    }
  }

  // Delete a purchase
  static async deletePurchase(req, res) {
    const { id } = req.params.id;

    try {
      const deletedPurchase = await Purchase.findOneAndDelete(id);

      if (!deletedPurchase) {
        return res.status(404).json({ error: 'Purchase not found' });
      }

      return res.status(200).json({ message: 'Purchase deleted successfully' });
    } catch (error) {
      console.error(`Error occured while deleting a purchase: ${error.message}`);
      return res
        .status(500)
        .json({ error: 'An error occured while deleting a purchase' });
    }
  }
}

module.exports = PurchaseController;
