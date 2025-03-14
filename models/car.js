const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
    image: { type: String, required: true }
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
