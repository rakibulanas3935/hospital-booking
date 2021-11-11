import React from "react";
import { Link } from "react-router-dom";
import img from "../Images/medical.svg";
const Step1 = () => {
  return (
    <div className="center">
      <div className="booking-title">
        <h2>MAKE BOOKINGS</h2>
      </div>
      <div className="booking-img">
        <img src={img} alt="" />
      </div>
      <div className="booking-description">
        <p>Use our online booking system to book in your favourite physio</p>
      </div>
      <div className="login-btn">
        <Link to="/step2">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
