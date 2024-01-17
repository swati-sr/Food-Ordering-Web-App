import React from "react";
import logo from "./assets/logo.jpg";
import style from "./styleComponent.css";
import { useState } from "react";

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
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
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
