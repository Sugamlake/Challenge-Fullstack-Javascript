import React, { useState } from "react";
import { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const openDrawerMenu = () => {
    var x = document.getElementById("mainNavBar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  };
  const userId = localStorage.getItem("id");
  useEffect(() => {
    if (userId !== null) {
      setUsername(localStorage.getItem("username"));
    } else {
      setUsername("");
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="navBar" id="mainNavBar">
      <a href="/">Home</a>
      <a href="/register">Register</a>
      <a href="/login">Log in</a>
      <a onClick={handleLogout}>Logout</a>
      {username != "" && <a>Welcome {username}</a>}
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
