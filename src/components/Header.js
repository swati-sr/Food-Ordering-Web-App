import React from "react";
import logo from "./assets/logo.jpg";
import style from "./styleComponent.css";

const Title = () => {
  return (
    <h1 id="title" key="appName" className="title">
      ZaikaHub
    </h1>
  );
};

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
