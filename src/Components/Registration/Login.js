import React from "react";
import logo from "../Images/kinima_logo 1.png";
import "./login.css";
const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="login-box">
      <div className="img">
        <img src={logo} alt="" width="232px" height="90px" className="logo" />
      </div>
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
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
        <div className="final-text">
          <p className="forget">Forget password?</p>
          <p className="new-account">New Account</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
