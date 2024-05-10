const Employee = require("../models/Employee");
const nodemailer = require('nodemailer');

class employeeController{
    

    static async createEmployee(req, res){
    // Validate user input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user record
        const employee = new Employee({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
        types: req.body.types,
        });

        // Save the new employee record
        await employee.save();

        // Send an email containing the password to the new employee
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "deluxgemstore@gmail.com",
                pass: "jrnc eviz hxpr vmyb ",
            }
            });

        const mailOptions = {
        from: 'deluxgemstore@gmail.com"',
        to: req.body.email,
        subject: 'Welcome to Our Company',
        text: `Dear ${req.body.fullName},\n\nWelcome to our company! Your account has been successfully created. Your password is: ${req.body.password}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(`Error occurred while sending email: ${error.message}`);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
        });

        return res.status(201).json({ message: 'Employee created successfully' });
    } catch (error) {
        console.error(`Error occurred while creating an employee: ${error.message}`);
        return res.status(500).json({ error: "An error occurred while creating an employee." });
    }
    };






    static async getAllEmployees(req, res) {
        try {
          const employees = await Employee.find();
          return res.status(200).json(employees);
        } catch (error) {
          console.error(`Error occurred while retrieving employees: ${error.message}`);
          return res.status(500).json({ error: "An error occurred while retrieving employees." });
        }
      }
      
     

      
    static async updateEmployee(req, res) {
        const { id } = req.params; // Employee ID
      
        try {
          // Find the employee by ID
          const existingEmployee = await Employee.findById(id);
      
          if (!existingEmployee) {
            return res.status(404).json({ error: "Employee not found." });
          }
          
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
          

          // Update the employee fields
          existingEmployee.fullName = req.body.fullName || existingEmployee.fullName;
          existingEmployee.email = req.body.email || existingEmployee.email;
          existingEmployee.password = hashedPassword || existingEmployee.password;
          existingEmployee.phoneNumber = req.body.phoneNumber || existingEmployee.phoneNumber;
          existingEmployee.role = req.body.role || existingEmployee.role;
          existingEmployee.types = req.body.types || existingEmployee.types;
      
          // Save the updated employee
          const updatedEmployee = await existingEmployee.save();
      
          // Send the updated password to the updated email
          

            const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "deluxgemstore@gmail.com",
                pass: "jrnc eviz hxpr vmyb ",
            }
            });

      
          const mailOptions = {
            from: 'deluxgemstore@gmail.com',
            to: updatedEmployee.email,
            subject: 'Your password has been updated',
            text: `Dear ${updatedEmployee.fullName},\n\nYour password has been updated to: ${req.body.password}`,
          };
      
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(`Error occurred while sending email: ${error.message}`);
            } else {
              console.log(`Email sent: ${info.response}`);
            }
          });
      
          return res.status(200).json(updatedEmployee);
        } catch (error) {
          console.error(`Error occurred while updating an employee: ${error.message}`);
          return res.status(500).json({ error: "An error occurred while updating an employee." });
        }
      }
      


}

module.exports = employeeController;

  