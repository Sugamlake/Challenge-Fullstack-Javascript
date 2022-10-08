import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const openDrawerMenu = () => {
    var x = document.getElementById("mainNavBar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  };

  return (
    <div className="navBar" id="mainNavBar">
      <a href="/">Home</a>
      <a href="/register">Register</a>
      <a href="/login">Log in</a>
      <a href="/logout">Logout</a>
      <a href="javascript:void(0);" className="icon" onClick={openDrawerMenu}>
        &#9776;
      </a>
      {/* <!--&#9776; is the code for the 3 line menu button--> */}
      <br />
      <br />
    </div>
  );
};

export default Navbar;
