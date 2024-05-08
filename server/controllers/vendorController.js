const Vendor = require("../models/Vendor");

class VendorController {
  // Purchaser: creates a vendor
  static async createVendor(req, res) {
    const { vendorName, phoneNumber, VendorsEmail } = req.body;

    try {
      // Check for existing vendor
      const existingVendor = await Vendor.findOne({ vendorName });

      if (existingVendor) {
        return res.status(404).json({ error: "Vendor already exists" });
      }

      const newVendor = await Vendor.create({
        vendorName,
        phoneNumber,
        VendorsEmail,
      });

      res.status(201).json(newVendor);
    } catch (error) {
      console.error(`Error occured while Creating a vendor: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while creating a vendor." });
    }
  }

  // Purchaser: update the vendor
  static async updateVendor(req, res) {
    const { vendorName } = req.params;

    try {
      const updatedVendor = await Vendor.findOneAndUpdate(
        vendorName,
        {
          phoneNumber: req.body.phoneNumber,
          VendorsEmail: req.body.VendorsEmail,
        },
        { new: true }
      );

      if (!updatedVendor) {
        return res.status(404).json({ error: "Vendor is not found" });
      }

      return res.status(200).json(updatedVendor);
    } catch (error) {
      console.error(`Error occured while updating a vendor: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while updating a vendor." });
    }
  }

  // Purchaser: get a single vendor
  static async getVendor(req, res) {
    const { vendorName } = req.body;

    try {
      const vendor = await Vendor.find({ vendorName });

      if (!vendor) {
        return res.status(404).json({ error: "Vendor not found" });
      }

      return res.status(200).json(vendor);
    } catch (error) {
      console.error(`Error occured while gettting a vendor: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while getting a vendor" });
    }
  }

  // Purchaser: gets all vendors
  static async getAllVendors(req, res) {
    try {
      const vendors = await Vendor.find({});

      if (!vendors) {
        return res.status(404).json({ error: "No vendors are found" });
      }

      return res.status(200).json(vendors);
    } catch (error) {
      console.error(
        `Error occured while getting all vendors: ${error.message}`
      );
      return res
        .status(500)
        .json({ error: "An error occured while getting all vendors" });
    }
  }

  // Purchaser: deletes a vendor
  static async deleteVendor(req, res) {
    const { vendorName } = req.params;

    try {
      const deletedVendor = await Vendor.findOneAndDelete(vendorName);

      if (!deletedVendor) {
        return res.status(404).json({ error: "Vendor not found" });
      }

      return res.status(200).json({ message: "Vendor deleted successfully" });
    } catch (error) {
      console.error(`Error occured while deleting a vendor: ${error.message}`);
      return res
        .status(500)
        .json({ error: "An error occured while deleting a vendor" });
    }
  }
}

module.exports = VendorController;
