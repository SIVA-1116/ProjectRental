// const mongoose = require("mongoose");

// function connectDB() {
//     mongoose.connect('mongodb+srv://rentalUser:rentalUser%40123@cluster0.78rtb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',)

//     const connection = mongoose.connection

//     connection.on('connected', () => {
//         console.log('MongoDB connection is Successful')
//     })
//     connection.on('error', () => {
//         console.log('MongoDB connection Error')
//     })
// }

// connectDB()

// module.exports = mongoose
// const mongoose = require('mongoose');

// const mongoURL = "mongodb://rentalUser:rentalUser%40123@cluster0.mongodb.net/BookCars?retryWrites=true&w=majority"; // Replace 'myDatabase' with your actual DB name

// mongoose.connect(mongoURL)
//     .then(() => console.log("MongoDB Connected Successfully"))
//     .catch((error) => console.error("MongoDB Connection Error:", error));

// module.exports = mongoose;
    
require('dotenv').config();
const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URI; // Get from .env file

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ MongoDB Connected Successfully");
}).catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
});

module.exports = mongoose;


