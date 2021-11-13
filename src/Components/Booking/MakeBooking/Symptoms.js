import React from "react";
import DiscreteSliderMarks from "./Text";
import "./Symptoms.css";
import { Link } from "react-router-dom";
const Symptoms = () => {
  return (
    <div className="container-symptoms">
      <div className="container-title">
        <div className="container-text">SYMPTOMS</div>
        <div className="container-description">
          Please rate your complaints in order of severity between 1 and 10. 1 =
          Least, 10 = Worst
        </div>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Pain</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Stiffness</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Swelling</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Loss of Function</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Loss of Motion</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>
      <div className="login-btn">
        <Link to="/step5">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
      <div className="login-btn">
        <Link to="/time">
          <button type="submit" className="submit-btn">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Symptoms;
