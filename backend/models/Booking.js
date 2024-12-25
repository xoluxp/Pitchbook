const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  pitch: {
    type: String,
    required: [true, 'Please select a pitch']
  },
  date: {
    type: Date,
    required: [true, 'Please select a date']
  },
  timeSlot: {
    type: String,
    required: [true, 'Please select a time slot']
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  teamMembers: [{
    type: String,
    required: true
  }],
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);
