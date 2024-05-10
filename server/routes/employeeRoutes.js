const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/createEmployee",authMiddleware.authorize("manager"||"ceo"),employeeController.createEmployee);
router.get("/allEmployee", authMiddleware.authorize("manager"||"ceo"), employeeController.getAllEmployees);
router.put("/updateEmployee/:id",authMiddleware.authorize("manager"||"ceo"),employeeController.updateEmployee);
module.exports = router;