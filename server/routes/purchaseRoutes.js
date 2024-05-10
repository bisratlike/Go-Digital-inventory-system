const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const purchaseController = require("../controllers/purchaseController");
const multer = require("multer");
const upload = multer();
// purchase
router.post("/newPurchase", authMiddleware.authenticate,
authMiddleware.authorize("purchaseManager"), upload.single("receiptPhoto"),purchaseController.createPurchase);
router.get("/onePurchase", purchaseController.getPurchase);
router.get("/allPurchases", purchaseController.getAllPurchases);
router.put("/updatePurchase",authMiddleware.authenticate,
authMiddleware.authorize("purchaseManager"), purchaseController.updatePurchase);
router.delete("/deletePurchase",authMiddleware.authenticate,
authMiddleware.authorize("purchaseManager"), purchaseController.deletePurchase);



module.exports = router;
