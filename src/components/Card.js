import React, { useState } from "react";
import { cloudinaryImageUrl } from "./constant";

const Card = ({
  cloudinaryImageId,
  cuisines,
  areaName,
  name,
  avgRatingString,
}) => {
  return (
    <div className="box">
      <ul>
        <img
          alt="restaurant Image"
          src={cloudinaryImageUrl + cloudinaryImageId}
        ></img>
        <li>{name}</li>
        <li>{areaName}</li>
        <li>{cuisines.join(", ")}</li>
        <li>{avgRatingString} stars</li>
      </ul>
    </div>
  );
};

export default Card;
