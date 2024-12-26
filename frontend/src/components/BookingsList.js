import React, { useEffect, useState } from 'react';

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Add fetch bookings logic here
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Bookings</h2>
      <div className="row">
        {bookings.map((booking) => (
          <div key={booking._id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pitch: {booking.pitch}</h5>
                <p className="card-text">Date: {new Date(booking.date).toLocaleDateString()}</p>
                <p className="card-text">Time: {booking.timeSlot}</p>
                <p className="card-text">Status: {booking.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsList;
