import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Time.css";
const Time = () => {
  const [time, setTime] = useState();
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  console.log(time);
  return (
    <div className="container-time">
      <div className="container-time-heading">
        <h1 className="time-heading-text">PICK A TIME</h1>
      </div>
      <div className="container-grid">
        <div className="container-text">Morning</div>
        <div className="container-text">Morning</div>
        <div className="btn-time">
          <button type="submit" onClick={handleTime}>
            9.00 AM
          </button>
        </div>
        <div className="btn-time">
          <button type="submit">11.00 AM</button>
        </div>
        <div className="btn-time">
          <button type="submit">12.00 AM</button>
        </div>
        <div className="btn-time">
          <button type="submit">7.00 AM</button>
        </div>
        <div className="btn-time">
          <button type="submit">7.00 AM</button>
        </div>
        <div className="btn-time">
          <button type="submit">7.00 AM</button>
        </div>
        <div className="btn-time">
          <button type="submit">7.00 AM</button>
        </div>
        <div className="btn-time">
          <button type="submit">7.00 AM</button>
        </div>
        <div className="btn-time">
          <button type="submit">7.00 AM</button>
        </div>
        <div className="btn-time">
          <button type="submit">7.00 AM</button>
        </div>
      </div>
      <h2 className="picktime">{time}</h2>
      <div className="login-btn">
        <Link to="/symptoms">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
      <div className="login-btn">
        <Link to="/date">
          <button type="submit" className="submit-btn">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Time;
