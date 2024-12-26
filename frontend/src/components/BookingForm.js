import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    pitch: '',
    date: '',
    timeSlot: '',
    teamMembers: ['']
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add booking submission logic here
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Pitch</label>
          <select 
            className="form-select"
            value={bookingData.pitch}
            onChange={(e) => setBookingData({...bookingData, pitch: e.target.value})}
          >
            <option value="">Select a pitch</option>
            <option value="pitch1">Pitch 1</option>
            <option value="pitch2">Pitch 2</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input 
            type="date"
            className="form-control"
            value={bookingData.date}
            onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time Slot</label>
          <select 
            className="form-select"
            value={bookingData.timeSlot}
            onChange={(e) => setBookingData({...bookingData, timeSlot: e.target.value})}
          >
            <option value="">Select time slot</option>
            <option value="09:00">09:00 - 10:00</option>
            <option value="10:00">10:00 - 11:00</option>
            <option value="11:00">11:00 - 12:00</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Book Pitch</button>
      </form>
    </div>
  );
};

export default BookingForm;
