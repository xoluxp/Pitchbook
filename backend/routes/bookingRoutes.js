const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createBooking,
  getBookings,
  getUserBookings
} = require('../controllers/bookingController');

router.post('/', protect, createBooking);
router.get('/', protect, getBookings);
router.get('/user', protect, getUserBookings);

module.exports = router;
