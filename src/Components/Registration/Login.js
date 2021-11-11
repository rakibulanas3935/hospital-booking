import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/kinima_logo.svg";
import "./login.css";
const Login = () => {
  // Cancel funtion default value
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="login-box">
      {/* Logo image */}

      <div className="img">
        <img src={logo} alt="" width="232px" height="90px" className="logo" />
      </div>

      {/* Login Form  */}

      <form onSubmit={handleClick}>
        <div className="username">
          <p className="title">Username</p>
          <input
            type="text"
            name=""
            className="input-field"
            placeholder="john.doe@gmail.com"
            id=""
          />
        </div>
        <div className="password">
          <p className="title">Password</p>
          <input
            type="password"
            className="input-field"
            name=""
            placeholder="****"
            id=""
          />
        </div>
        <div className="login-btn">
          <Link to="/step1">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </Link>
        </div>
        <div className="final-text">
          <Link to="/forget">
            <p className="forget">Forget password?</p>
          </Link>
          <Link to="/register">
            <p className="new-account">New Account</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
