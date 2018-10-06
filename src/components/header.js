import React from "react";
import logo from "../images/holsinger. logo.png";

const Header = () => (
  <div className="container-fluid header">
    <img className="logo" src={logo} alt="logo" />
    <button className="icon">
      <i className="material-icons">dehaze</i>
    </button>
  </div>
);

export default Header;
