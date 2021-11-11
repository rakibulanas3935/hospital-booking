import React from "react";
import "./BookingHeader.css";
const BookingHeader = () => {
  return (
    <div>
      <div className="makebooking">
        <nav className="booking-nav">
          <div className="booking-nav-items">
            <div className="booking-nav-btn">
              <button className="nav-btn-booking">Physio</button>
            </div>
            <div className="booking-nav-btn">
              <button className="nav-btn-booking">Date</button>
            </div>
            <div className="booking-nav-btn">
              <button className="nav-btn-booking">Time</button>
            </div>
            <div className="booking-nav-btn">
              <button className="nav-btn-booking">Symptoms</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BookingHeader;
