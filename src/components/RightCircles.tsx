import React from "react";

import Circle from "./Circle";

const RightCircles = () => {
  const divArray = new Array(1000).fill(null);

  return (
    <div className="circles">
      {divArray.map((_, index) => (
        <Circle key={index} />
      ))}
    </div>
  );
};

export default RightCircles;
