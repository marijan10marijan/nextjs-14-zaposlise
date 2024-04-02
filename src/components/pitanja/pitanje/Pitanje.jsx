"use client";
import React, { useState } from "react";

const Pitanje = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return ( 
    <div className={isActive ? "pitanja-box style" : "pitanja-box"}>
      <div className="pitanja-box__flex" onClick={handleClick}>
        <p className="pitanja-box__pitanje">{title}</p>
        <p
          id="plus"
          className={
            isActive ? "pitanja-box__plus hidden" : "pitanja-box__plus"
          }
        >
          +
        </p>
        <p
          id="minus"
          className={
            isActive ? "pitanja-box__minus" : "pitanja-box__minus hidden"
          }
        >
          -
        </p>
      </div>
      <div
        className={isActive ? "pitanja-box__text visible" : "pitanja-box__text"}
      >
        {description}
      </div>
    </div>
  );
};

export default Pitanje;
