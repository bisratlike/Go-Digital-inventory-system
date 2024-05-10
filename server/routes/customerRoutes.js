const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/newCustomer",authMiddleware.authenticate,
authMiddleware.authorize("salesManager"), customerController.createCustomer);
router.put("/updateCustomer", authMiddleware.authenticate,
authMiddleware.authorize("salesManager"),customerController.updateCustomer);
router.get("/oneCustomer", customerController.getCustomer);
router.get("/allCustomers", customerController.getAllCustomers);
router.delete("/deleteCustomer",authMiddleware.authenticate,
authMiddleware.authorize("salesManager"), customerController.deleteCustomer);

module.exports = router;
