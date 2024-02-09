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
    <div className="max-w-sm rounded-lg transition duration-300 hover:bg-[#fffcf2] hover:scale-110 cursor-pointer ">
      <ul className="">
        <img
          className="rounded-t-lg h-40"
          alt="restaurant Image"
          src={CLI_CLOUDINARY_IMAGE_ID + cloudinaryImageId}
        ></img>
        <li className="mb-2 text-xl font-bold tracking-tight text-[#252422] dark:text-white text-wrap break-all">
          {name}
        </li>
        <li className="mb-3 font-normal text-[gray]-700 dark:text-gray-400">
          {areaName}
        </li>
        <li className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-wrap">
          {cuisines.join(", ")}
        </li>
        <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {avgRatingString} stars
        </li>
      </ul>
    </div>
  );
};

export default Card;
