import React from "react";
import logo from "./assets/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h1 id="title" key="appName" className="title">
      ZaikaHub
    </h1>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <img alt="logo" src={logo} className="logo"></img>
      <Title />
      <div className="navBar">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li>About</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            {" "}
            <li>Instamart</li>
          </Link>
          <li>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Login</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Logout</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
