import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between pl-3 pr-3 pt-3">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-[#dad2bc] h-56 w-60 m-5 max-w-sm rounded-t-lg"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
