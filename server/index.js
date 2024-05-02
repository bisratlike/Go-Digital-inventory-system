const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const databaseUrl = process.env.URL;
const app = express();
const PORT = process.env.PORT||3000;
const localdatabase = process.env.Local ;
app.use(express.json());
app.use(cors());

mongoose.connect(databaseUrl,{})
.then(()=>{
console.log("Connected")
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err);

})

const server = app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
});
module.exports = server;