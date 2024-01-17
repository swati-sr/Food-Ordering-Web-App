import React from "react";

const Shimmer = () => {
  return (
    <div className="emptyRetsro" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, index) => {
          <div key={index} className="shimmer-effect"></div>;
        })}
    </div>
  );
};

export default Shimmer;
