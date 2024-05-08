require('dotenv').config();
const Sale = require('../models/Sale');
const { ObjectId } = require('mongodb');


//  async function addSales (req, res) {
//   const token = req.header('Authorization').split(' ')[1]; // Extract token from header
  

//   try {
//     decodedToken = jwt.verify(token, 'YOUR_SECRET_KEY'); // Verify and decode token
//   } catch (error) {
//     return res.status(401).send('Unauthorized: Invalid token');
//   }

//   const userId = decodedToken.id; // Extract user ID from token
//   //
//     try {
//       const decodedToken = jwt.verify(token, process.env.jwtWebTokenKey);
//       const employeeId = decodedToken._id;
//       const { 
       
//         saleName, 
//         price, 
//         quantity,
//         serialNumber,
//         amountPaid ,
//         category,
//         orderStatus ,
//         orderedAt ,
//         deliveredAt,
//         paymentStatus,
//         customerId
//         } = req.body;
//       const photoBase64 = req.file.buffer.toString("base64");
        
//       const sale = new Sale({
        
//         employeeId,
//         saleName, 
//         price, 
//         quantity,
//         serialNumber :"",
//         amountPaid ,
//         category,
//         orderStatus :"planning",
//         orderedAt ,
//         deliveredAt,
//         photoBase64,
//         paymentStatus:"pending",
//         customerId,
//       });
  
//       await sale.save();
//       res.status(201).json({ message: "Product created successfully" });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };


  exports.updateOrderStatus = async (req, res) => {
    try {
        const mysaleId = req.params.mysaleId;
        const { orderStatus } = req.body;
        const saleId = new ObjectId(mysaleId);


        const updatedOrder = await Order.findByIdAndUpdate(saleId, { orderStatus }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order status updated successfully', orderStatus: updatedOrder });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
