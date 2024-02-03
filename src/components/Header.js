import React from "react";
import logo from "./assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import login from "./assets/login.png";

// const Title = () => {
//   return (
//     <h1 id="title" key="appName" className="title">
//       ZaikaHub
//     </h1>
//   );
// };

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between items-center bg-[#83c5be] h-24 shadow-2xl sticky top-0">
      <img className="h-14 w-16 pl-4   " alt="logo" src={logo}></img>
      {/* <Title /> */}
      <ul className="flex gap-6 justify-center font-bold text-[#edf6f9] ">
        <Link to="/" className="hover:text-[#006d77]">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/about" className="hover:text-[#006d77]">
          {" "}
          <li>About</li>
        </Link>
        <Link to="/contact" className="hover:text-[#006d77]">
          {" "}
          <li>Contact</li>
        </Link>
        <Link to="/instamart" className="hover:text-[#006d77]">
          {" "}
          <li>Instamart</li>
        </Link>
      </ul>
      <div className="pr-4 flex font-bold text-[#edf6f9] hover:text-[#006d77]">
        {/* <img className="h-8" alt="Log In" src={login}></img> */}
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
