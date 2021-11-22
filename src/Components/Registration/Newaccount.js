import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./kinima_logo.svg";
import Profile from "./Vector.svg";
import "./Newaccount.css";
import useAuth from "../Firebase/Hooks/useAuth";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

const Newaccount = () => {
  const { registerUser, user, isLoading, authError } = useAuth();

  const [registerData, setRegisterData] = useState({});

  //getting value from newregister
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const { profile } = registerData;

  //handle click in from
  const handleClick = (e) => {
    if (registerData.password1 !== registerData.password2) {
      alert("password didn't match");
      return;
    }
    registerUser(registerData.email, registerData.password1);
    e.preventDefault();
  };

  return (
    <div className="newaccount">
      <div className="newaccount-logo">
        <img src={Logo} alt="" className="logo-img" />
      </div>

      {/* Register from */}

      <div className="newaccount-from">
        {!isLoading && (
          <form onSubmit={handleClick}>
            <div className="profile-upload">
              <div className="profile-picture">
                <img src={Profile} alt="" className="profile-img" />
              </div>
              <div className="upload-picture">
                <input
                  type="file"
                  name="profile"
                  placeholder="upload"
                  className="upload-file"
                  id=""
                  onChange={handleOnChange}
                  accept="image/*"
                />
                <label for="file">UPLOAD</label>
              </div>
            </div>
            <div className="firstname">
              <p className="title-register">First Name</p>
              <input
                type="text"
                name="firstName"
                className="input-field"
                placeholder="Jhon"
                required
                onChange={handleOnChange}
                id=""
              />
            </div>
            <div className="lastname">
              <p className="title-register">Last Name</p>
              <input
                type="text"
                name="lastName"
                className="input-field"
                placeholder="Doe"
                required
                onChange={handleOnChange}
                id=""
              />
            </div>
            <div className="email">
              <p className="title-register">Email</p>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="john.doe@gmail.com"
                id=""
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="password">
              <p className="title-register">Password</p>
              <input
                type="password"
                className="input-field"
                name="password1"
                placeholder="****"
                id=""
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="password">
              <p className="title-register">Confirm Password</p>
              <input
                type="password"
                className="input-field"
                name="password2"
                placeholder="****"
                onChange={handleOnChange}
                id=""
                required
              />
            </div>
            <div className="doctor-code">
              <p className="title-register">
                Physio Code (n/a if you are a client)
              </p>
              <input
                type="password"
                className="input-field"
                name="physioCode"
                placeholder="****"
                onChange={handleOnChange}
                id=""
              />
            </div>
            <div className="login-btn">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
            <div className="login-btn">
              <NavLink to="/sucessregister">
                <button type="submit" className="submit-btn">
                  Login
                </button>
              </NavLink>
            </div>
            {isLoading && <CircularProgress />}
            {user?.email && (
              // <Alert severity="success">
              //   <AlertTitle>Success</AlertTitle>
              //   This is a success alert — <strong>check it out!</strong>
              // </Alert>
              <div className="login-btn">
                <NavLink to="/sucessregister">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </NavLink>
              </div>
            )}
            :{authError && <Alert severity="error">{authError}</Alert>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Newaccount;
