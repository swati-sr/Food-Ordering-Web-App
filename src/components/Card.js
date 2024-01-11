import React, { useState } from "react";

const Card = ({ image, name, cuisine, rating }) => {
  return (
    <div className="box">
      <ul>
        <img alt="restaurant Image" src={image}></img>
        <li>{name}</li>
        <li>{cuisine}</li>
        <li>{rating} stars</li>
      </ul>
    </div>
  );
};

export default Card;
