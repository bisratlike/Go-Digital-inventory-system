// middleware/authMiddleware.js
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
key = process.env.jwtWebTokenKey;

exports.authenticate = (req, res, next) => {
  // Extract token from headers
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify token
    const decodedToken = jwt.verify(token, key);

    // Attach authenticated user to request object
    req.employee= decodedToken;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};


exports.authorize = (requiredRole) => {
  return async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: 'No token' });
    }
    
    let employee; // Declare the employee variable

    try {
      const decoded = jwt.verify(token,process.env.jwtWebTokenKey);
      console.log(decoded)
      const employeeId = decoded.employeeId;
      console.log(employeeId)
      employee = await Employee.findById(employeeId); // Assign a value to the employee variable
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    if (employee.role === requiredRole) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
};
