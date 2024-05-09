const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/newCustomer", customerController.createCustomer);
router.put("/updateCustomer", customerController.updateCustomer);
router.get("/oneCustomer", customerController.getCustomer);
router.get("/allCustomers", customerController.getAllCustomers);
router.delete("/deleteCustomer", customerController.deleteCustomer);

module.exports = router;
