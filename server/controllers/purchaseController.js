const Purchase = require("../models/Purchase");
const Vendor = require("../models/Vendor");
const jwt = require("jsonwebtoken");

class PurchaseController {
  // Creates a purchase
  static async createPurchase(req, res) {
    const { id } = req.params; // Vendor's Id

    try {
      // Get the authorized user ID
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.jwtWebTokenKey);
      const employeeId = decoded.employeeId;

      // Get the vendor ID
      const existingVendor = await Vendor.findOne({ id });

      if (!existingVendor) {
        return res
          .status(200)
          .json({ error: "Vendor do not exist, Please add your vendor." });
      }

      const vendorId = existingVendor._id;
      const photoBase64=  req.file.buffer.toString('base64');
      const newPurchase = await Purchase.create({
        employeeId: employeeId,
        purchaseName: req.body.purchaseName,
        quantity: req.body.quantity,
        serialNumber: req.body.serialNumber,
        price: req.body.price,
        category: req.body.category,
        receivedAt: req.body.receivedAt,
        receiptPhoto: photoBase64,
        vendorId: vendorId,
        vendorName: existingVendor.vendorName,
        phoneNumber: existingVendor.phoneNumber,
        vendorsEmail: existingVendor.vendorsEmail,
        description: req.body.description,
      });

      return res.status(201).json(newPurchase);
    } catch (error) {
      console.error(`Error occured while Creating a vendor: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while creating a vendor." });
    }
  }

  // Get a single purchase
  static async getPurchase(req, res) {
    const { id } = req.params;

    try {
      const purchase = await Purchase.findOne({ id });

      if (!purchase) {
        return res.status(404).json({ error: "Purchase not found" });
      }

      return res.status(200).json(purchase);
    } catch (error) {
      console.error(
        `Error occured while gettting a purchase: ${error.message}`
      );
      return res
        .status(500)
        .json({ error: "An error occured while getting a purchase" });
    }
  }

  // Get all purchases
  static async getAllPurchases(req, res) {
    try {
      const purchases = await Purchase.find({});

      if (!purchases) {
        return res.status(404).json({ error: "No purchases are found" });
      }

      return res.status(200).json(purchases);
    } catch (error) {
      console.error(
        `Error occured while getting all purchases: ${error.message}`
      );
      return res
        .status(500)
        .json({ error: "An error occured while getting all purchases" });
    }
  }

  // Update already made purchase
  static async updatePurchase(req, res) {
    const _id = req.query._id // Purchase ID
  
    try {
      // Get the authorized user ID
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.jwtWebTokenKey);
      const employeeId = decoded.employeeId;
  
      // Find the purchase by ID
      const existingPurchase = await Purchase.findById(_id);
  
      if (!existingPurchase) {
        return res.status(404).json({ error: "Purchase not found." });
      }
  
      // Check if the authorized employee is the creator of the purchase
      if (existingPurchase.employeeId.toString() !== employeeId) {
        return res.status(403).json({ error: "You are not authorized to update this purchase." });
      }
  
      console.log("Before update:");
      console.log(existingPurchase);
  
      // Update the purchase fields
      existingPurchase.purchaseName = req.body.purchaseName || existingPurchase.purchaseName;
      existingPurchase.quantity = req.body.quantity || existingPurchase.quantity;
      existingPurchase.serialNumber = req.body.serialNumber || existingPurchase.serialNumber;
      existingPurchase.price = req.body.price || existingPurchase.price;
      existingPurchase.category = req.body.category || existingPurchase.category;
      existingPurchase.receivedAt = req.body.receivedAt || existingPurchase.receivedAt;
      existingPurchase.description = req.body.description || existingPurchase.description;
  
      console.log("After update:");
      console.log(existingPurchase);
  
      // Update vendor information if provided
      if (req.body.vendorId) {
        const existingVendor = await Vendor.findById(req.body.vendorId);
        if (!existingVendor) {
          return res.status(404).json({ error: "Vendor not found." });
        }
        existingPurchase.vendorId = existingVendor._id;
        existingPurchase.vendorName = existingVendor.vendorName;
        existingPurchase.phoneNumber = existingVendor.phoneNumber;
        existingPurchase.vendorsEmail = existingVendor.vendorsEmail;
      }
  
      // Save the updated purchase
      const updatedPurchase = await existingPurchase.save();
  
      return res.status(200).json(updatedPurchase);
    } catch (error) {
      console.error(`Error occurred while updating a purchase: ${error.message}`);
      return res.status(500).json({ error: "An error occurred while updating a purchase." });
    }
  }
  // Delete a purchase
  static async deletePurchase(req, res) {
    const _id = req.query._id 

    try {
      const deletedPurchase = await Purchase.findByIdAndDelete(_id);

      if (!deletedPurchase) {
        return res.status(404).json({ error: "Purchase not found" });
      }

      return res.status(200).json({ message: "Purchase deleted successfully" });
    } catch (error) {
      console.error(
        `Error occured while deleting a purchase: ${error.message}`
      );
      return res
        .status(500)
        .json({ error: "An error occured while deleting a purchase" });
    }
  }
}

module.exports = PurchaseController;
