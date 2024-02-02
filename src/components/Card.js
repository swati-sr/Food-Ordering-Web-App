import React, { useState } from "react";
import { CLI_CLOUDINARY_IMAGE_ID } from "./constant";

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
          src={CLI_CLOUDINARY_IMAGE_ID + cloudinaryImageId}
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
