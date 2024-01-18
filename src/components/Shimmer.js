import React from "react";

const Shimmer = () => {
  const shimmerEffect = {
    backgroundColor: "lightgray",
    height: "222px",
    width: "208px",
    margin: "20px",
  };
  return (
    <div className="emptyRestro" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, index) => {
          <div
            key={index}
            className="shimmerEffect"
            style={shimmerEffect}
          ></div>;
        })}
    </div>
  );
};

export default Shimmer;
