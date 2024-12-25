const Booking = require('../models/Booking');

// Create booking
const createBooking = async (req, res) => {
  try {
    const { pitch, date, timeSlot, teamMembers } = req.body;
    
    // Check for existing booking
    const existingBooking = await Booking.findOne({
      pitch,
      date,
      timeSlot,
      status: { $ne: 'cancelled' }
    });

    if (existingBooking) {
      return res.status(400).json({ message: 'Time slot already booked' });
    }

    const booking = await Booking.create({
      pitch,
      date,
      timeSlot,
      captain: req.user._id,
      teamMembers
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('captain', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user bookings
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ captain: req.user._id })
      .populate('captain', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getUserBookings
};
