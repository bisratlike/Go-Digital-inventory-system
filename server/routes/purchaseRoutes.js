const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const purchaseController = require('../controllers/purchaseController');

const router = express.Router();

// purchase
router.post('/purchases/vendor', authMiddleware.authorize('purchaserManager'), purchaseController.createPurchase);
router.get('/purchases/purchase', authMiddleware.authorize('purchaserManager'), purchaseController.getPurchase);
router.get('/purchases', authMiddleware.authorize('purchaserManager'), purchaseController.getAllPurchases);
router.put('/purchases/purchase', authMiddleware.authorize('purchaserManager'), purchaseController.updatePurchase);
router.delete('/purchases/purchase', authMiddleware.authorize('purchaserManager'), purchaseController.deletePurchase);

module.exports = router;
