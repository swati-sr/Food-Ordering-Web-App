import React from "react";
import logo from "./assets/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import login from "./assets/login.png";
import userContext from "./utils/userContext";
import { useSelector } from "react-redux";
import cartSlice from "./utils/cartSlice";

// const Title = () => {
//   return (
//     <h1 id="title" key="appName" className="title">
//       ZaikaHub
//     </h1>
//   );
// };

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(userContext);

  // Subscribing to the store
  const noOfItems = useSelector((store) => store.cart.items.length);

  return (
    <div className="flex justify-between items-center bg-[#fffcf2] h-24 shadow-2xl sticky top-0">
      <img className="h-14 w-16 pl-4   " alt="logo" src={logo}></img>
      {/* <Title /> */}
      <ul className="flex gap-6 justify-center font-bold text-[#252422] ">
        <Link to="/" className="hover:text-[#eb5e28]">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/frequent-questions" className="hover:text-[#eb5e28]">
          {" "}
          <li>FAQs</li>
        </Link>
        <Link to="/contact" className="hover:text-[#eb5e28]">
          {" "}
          <li>Contact</li>
        </Link>
        <Link to="/instamart" className="hover:text-[#eb5e28]">
          {" "}
          <li>Instamart</li>
        </Link>
        <Link to="/cart" className="hover:text-[#eb5e28]">
          <li>Cart - {noOfItems}</li>{" "}
        </Link>
      </ul>
      <div className="pr-4 flex font-bold text-[#252422] hover:text-[#eb5e28]">
        {/* <img className="h-8" alt="Log In" src={login}></img> */}
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>{user.name}</button>
        )}
      </div>
    </div>
  );
};

export default Header;
