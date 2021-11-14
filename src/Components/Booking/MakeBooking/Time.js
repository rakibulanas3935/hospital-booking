import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Time.css";
import img from "../../Images/tick.svg";
const Time = () => {
  const [time, setTime] = useState("Pick Time");
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
        <div className="container-text">Afternoon</div>
        <div className="btn-time">
          <input type="submit" value="7:00 AM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="8:00 AM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="9:00 AM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="10:00 AM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="11:00 AM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="12:00 PM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="1:00 PM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="2:00 PM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="3:00 PM" onClick={handleTime} />
        </div>
        <div className="btn-time">
          <input type="submit" value="4:00 PM" onClick={handleTime} />
        </div>
      </div>

      <div className="show-value">
        <img src={img} alt="" height="50px" width="50px" />
        <h2 className="picktime">{time}</h2>
      </div>

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
