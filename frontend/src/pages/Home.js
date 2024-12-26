import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1>Welcome to PitchBook</h1>
        <p className="lead">Book your football pitch easily and efficiently</p>
        <hr className="my-4" />
        <p>Get started by booking a pitch or viewing your existing bookings.</p>
        <Link to="/book" className="btn btn-primary btn-lg mr-3">
          Book a Pitch
        </Link>
      </div>
    </div>
  );
};

export default Home;
