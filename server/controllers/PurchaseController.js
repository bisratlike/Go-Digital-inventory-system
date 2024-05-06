const Purchase = require('../models/Purchase');
const Vendor = require('../models/Vendor');

class PurchaseController {
  // Creates a vendor while a purchase is made
  static async createVendor(req, res) {
    const { vendorName, phoneNumber } = req.body;

    try {
      // Check for existing vendor
      let existingVendor = await Vendor.findOne({ vendorName });

      if (existingVendor) {
        res.status(200).json(existingVendor);
      }

      const newVendor = await Vendor.create({
        vendorName,
        phoneNumber,
      });

      res.status(201).json(newVendor);
    } catch (error) {
      console.error(`Error occured while Creating a vendor: ${error.message}`);
      return res.status(500).json({ error: 'An error occured while creating a vendor.' });
    }
  }

  // Get a single purchase
  static async getPurchase(req, res) {
    const { id } = req.params;

    try {
      const purchase = await Purchase.findById(id);

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
      const purchases = Purchase.find();

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
    const {
      purchaseName,
      quantity,
      serialNumber,
      price,
      category,
      orderDate,
      receiptPhoto,
      vendorId,
      vendorName,
      phoneNumber,
      description,
    } = req.body;

    try {
      const updatedPurchase = await Purchase.findByIdAndUpdate(
        id,
        {
          purchaseName,
          quantity,
          serialNumber,
          price,
          category,
          orderDate,
          receiptPhoto,
          vendorId,
          vendorName,
          phoneNumber,
          description,
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
    const { id } = req.params;

    try {
      const deletedPurchase = await Purchase.findByIdAndDelete(id);

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
