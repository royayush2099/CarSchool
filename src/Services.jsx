import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Services = () => {
  return (
    <div className="services-container">
      <h2>Choose Your Service</h2>
      <div className="service-options">
        <div className="service-option">
          <h3>Driving Schools</h3>
          <p>Find the best driving schools in your area.</p>
          <Link to="/driving-schools" className="btn btn-primary">Explore</Link>
        </div>
        <div className="service-option">
          <h3>Individual Tutors</h3>
          <p>Hire experienced driving instructors for personalized lessons.</p>
          <Link to="/individual-tutors" className="btn btn-primary">Explore</Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
