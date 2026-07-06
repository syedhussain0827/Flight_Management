const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flight:      { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
  seats:       { type: Number, default: 1 },
  totalPrice:  { type: Number, required: true },
  status:      { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' },
  bookingDate: { type: Date, default: Date.now }
},{timestamps: true})

module.exports = mongoose.model('Booking', bookingSchema)