import React from "react";
import { Link } from "react-router-dom";

const Step2 = () => {
  return (
    <div>
      <h1>I am step two</h1>
      <div className="btn">
        <Link to="/step3">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
      <div className="btn">
        <Link to="/login">
          <button type="submit" className="submit-btn">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step2;
