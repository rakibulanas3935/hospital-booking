import React from "react";
import { Link } from "react-router-dom";

const Step1 = () => {
  return (
    <div>
      <h1>I am step1</h1>
      <div className="btn">
        <Link to="/step2">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
      <div className="btn">
        <Link to="/login">
          <button type="submit" className="submit-btn">
            home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
