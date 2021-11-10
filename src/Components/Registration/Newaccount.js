import React from "react";
import { Link } from "react-router-dom";

const Newaccount = () => {
  return (
    <div>
      <h1>New account</h1>
      <div className="btn">
        <Link to="/login">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Newaccount;
