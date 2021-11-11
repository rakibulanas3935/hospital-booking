import React from "react";
import Logo from "../Images/kinima_logo.svg";
import setting from "./el_cog.svg";
import "./Shared.css";
const Shared = () => {
  return (
    <div className="shared-logo">
      <img src={Logo} className="logo-img" alt="" />
      <img src={setting} alt="" />
    </div>
  );
};

export default Shared;
