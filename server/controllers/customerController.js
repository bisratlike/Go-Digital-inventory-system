const Customer = require("../models/Customer");

class customerController {
  
  static async createCustomer(req, res) {
    const { customerType,customerName,companyName, customerEmail,customerPhone } = req.body;

    try {
      // Check for existing vendor
      const existingCustomer = await Customer.findOne({ customerEmail});

      if (existingCustomer) {
        return res.status(404).json({ error: "customer already exists" });
      }

      const newCustomer = await Customer.create({
       
        customerType,
        customerName,
        companyName :companyName|| "unknown",
        customerEmail,
        customerPhone
      });
      res.status(201).json(newCustomer);
    } catch (error) {
      console.error(`Error occured while Creating a customer: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while creating a customer." });
    }
  }

//   Purchaser: update the customer
  static async updateCustomer(req, res) {
    const { customerId } = req.params;

    try {
      const updatedCustomer = await Customer.findOneAndUpdate(
        customerId,
        {
            customerType,
            customerName,
            companyName,
            customerEmail,
            customerPhone
        } = req.body,
        { new: true }
      );

      if (!updatedCustomer) {
        return res.status(404).json({ error: "Customer is not found" });
      }

      return res.status(200).json(updatedCustomer);
    } catch (error) {
      console.error(`Error occured while updating a customer: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while updating a customer." });
    }
  }

  // Purchaser: get a single customer
  static async getCustomer(req, res) {
    const { customerId } = req.params;

    try {
      const customer = await Customer.find({ customerId });

      if (!customer) {
        return res.status(404).json({ error: "Customer not found" });
      }

      return res.status(200).json(customer);
    } catch (error) {
      console.error(`Error occured while gettting a customer: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while getting a customer" });
    }
  }

  // gets all customers
  static async getAllCustomers(req, res) {
    try {
      const customers = await Customer.find({});

      if (!customers) {
        return res.status(404).json({ error: "No customers are found" });
      }

      return res.status(200).json(customers);
    } catch (error) {
      console.error(
        `Error occured while getting all customers: ${error.message}`
      );
      return res
        .status(500)
        .json({ error: "An error occured while getting all customers" });
    }
  }
    //deletes a customer
  static async deleteCustomer(req, res) {
    const { customerId } = req.params;

    try {
      const deletedCustomer = await Vendor.findOneAndDelete(customerId);

      if (!deletedCustomer) {
        return res.status(404).json({ error: "customer not found" });
      }

      return res.status(200).json({ message: "customer deleted successfully" });
    } catch (error) {
      console.error(`Error occured while deleting a customer: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while deleting a customer" });
    }
  }
}

module.exports = customerController;
