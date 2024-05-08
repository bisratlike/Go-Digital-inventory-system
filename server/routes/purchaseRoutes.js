const express = require("express");
const authController = require("../controllers/authController");
const purchaseController = require("../controllers/purchaseController");
const VendorController = require("../controllers/vendorController");

const router = express.Router();

// purchase
router.post("/purchases/vendor", purchaseController.createPurchase);
router.get("/purchases/purchase", purchaseController.getPurchase);
router.get("/purchases", purchaseController.getAllPurchases);
router.put("/purchases/purchase", purchaseController.updatePurchase);
router.delete("/purchases/purchase", purchaseController.deletePurchase);

// Vendors
router.post("/vendors/vendor", VendorController.createVendor);
router.put("/vendors/vendor", VendorController.updateVendor);
router.get("/vendors/vendor", VendorController.getVendor);
router.get("/vendors", VendorController.getAllVendors);
router.delete("/vendors/vendor", VendorController.deleteVendor);

module.exports = router;
