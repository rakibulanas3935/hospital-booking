import React from "react";
import { Link } from "react-router-dom";
import Logo from "./kinima_logo.svg";
import Profile from "./Vector.svg";
import "./Newaccount.css";
const Newaccount = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="newaccount">
      <div className="newaccount-logo">
        <img src={Logo} alt="" className="logo-img" />
      </div>

      {/* Register from */}

      <div className="newaccount-from">
        <form onSubmit={handleClick}>
          <div className="profile-upload">
            <div className="profile-picture">
              <img src={Profile} alt="" className="profile-img" />
            </div>
            <div className="upload-picture">
              <input
                type="file"
                name=""
                placeholder="upload"
                className="upload file"
                id=""
              />
            </div>
          </div>

          <div className="firstname">
            <p className="title-register">First Name</p>
            <input
              type="text"
              name=""
              className="input-field"
              placeholder="Jhon"
              id=""
            />
          </div>
          <div className="lastname">
            <p className="title-register">Last Name</p>
            <input
              type="text"
              name=""
              className="input-field"
              placeholder="Doe"
              id=""
            />
          </div>
          <div className="email">
            <p className="title-register">Email</p>
            <input
              type="text"
              name=""
              className="input-field"
              placeholder="john.doe@gmail.com"
              id=""
            />
          </div>
          <div className="password">
            <p className="title-register">Password</p>
            <input
              type="password"
              className="input-field"
              name=""
              placeholder="****"
              id=""
            />
          </div>
          <div className="doctor-code">
            <p className="title-register">
              Physio Code (n/a if you are a client)
            </p>
            <input
              type="password"
              className="input-field"
              name=""
              placeholder="****"
              id=""
            />
          </div>
          <div className="login-btn">
            <Link to="/sucessregister">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newaccount;
