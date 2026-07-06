const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true , unique: true},
    airline:       {type: String, required: true},
    source:        {type: String, required: true},
    destination:   {type: String, required: true},
    departureTime: {type: Date, required: true},
    arrivalTime:   {type: Date, required: true},
    price:         {type: Number, required: true},
    totalSeats:    {type: Number, required: true},
    availableSeats:{type: Number, required: true},
    status:        {type: String, enum: ['scheduled','cancelled','completed'], default:'scheduled'}
},{ timestamps : true})

module.exports = mongoose.model('Flight', flightSchema)