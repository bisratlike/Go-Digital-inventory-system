const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
// const databaseUrl = process.env.URL;
const app = express();
const PORT = process.env.PORT || 3000;
const localdatabase = process.env.localdatabase;
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/authRoutes');
const purchaseRoute = require('./routes/purchaseRoutes');
const vendorRoutes = require('./routes/vendorRoutes');

mongoose
  .connect(localdatabase, {})
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/', authRoutes);
app.use(purchaseRoute);
app.use(vendorRoutes);

const server = app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
module.exports = server;
