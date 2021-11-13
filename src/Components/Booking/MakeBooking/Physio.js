import React from "react";
import { Link } from "react-router-dom";

const Physio = () => {
  return (
    <div>
      <div class="container-phsio">
        <div class="group">
          <input type="checkbox" id="xd" />
          <label for="xd">Henry Blackburn</label>
        </div>

        <div class="group">
          <input type="checkbox" id="figma" />
          <label for="figma">Laila Van Der Merwe</label>
        </div>

        <div class="group">
          <input type="checkbox" id="sketch" />
          <label for="sketch">Maire Tan</label>
        </div>
        <div className="login-btn">
          <Link to="/date">
            <button type="submit" className="submit-btn">
              Next
            </button>
          </Link>
        </div>
        <div className="login-btn">
          <Link to="/step1">
            <button type="submit" className="submit-btn">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Physio;
