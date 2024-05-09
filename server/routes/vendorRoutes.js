const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const VendorController = require('../controllers/vendorController');

const router = express.Router();

// Vendors
router.post('/vendors/vendor', authMiddleware.authorize('purchaserManager'), VendorController.createVendor);
router.put('/vendors/vendor', authMiddleware.authorize('purchaserManager'), VendorController.updateVendor);
router.get('/vendors/vendor', authMiddleware.authorize('purchaserManager'), VendorController.getVendor);
router.get('/vendors', authMiddleware.authorize('purchaserManager'), VendorController.getAllVendors);
router.delete('/vendors/vendor', authMiddleware.authorize('purchaserManager'), VendorController.deleteVendor);

module.exports = router;
