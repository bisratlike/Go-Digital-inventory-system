const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");


const VendorController = require("../controllers/vendorController");

router.post("/newVendor",authMiddleware.authenticate,
authMiddleware.authorize("purchaseManager"), VendorController.createVendor);
router.put("/updateVendor",authMiddleware.authenticate,
authMiddleware.authorize("purchaseManager"), VendorController.updateVendor);
router.get("/onevendor", VendorController.getVendor);
router.get("/allVendors", VendorController.getAllVendors);
router.delete("/deleteVendor",authMiddleware.authenticate,
authMiddleware.authorize("purchaseManager"), VendorController.deleteVendor);

module.exports = router;
