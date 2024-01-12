import React, { useState } from "react";
import { cloudinaryImageUrl } from "./constant";

const Card = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="box">
      <ul>
        <img
          alt="restaurant Image"
          src={cloudinaryImageUrl + cloudinaryImageId}
        ></img>
        <li>{name}</li>
        <li>{cuisines}</li>
        <li>{avgRating} stars</li>
      </ul>
    </div>
  );
};

export default Card;
