import React from "react";
import MobileSliderBox from "./mobileSliderBox/MobileSliderBox";

const OglašivačiMobileSlider = () => {
  return (
    <div className="mobile-slider">
      <div className="mobile-slider__title">
        <h2>Naši oglašivači</h2>
      </div>
      <div className="mobile-slider__box">
        <div className="mobile-slider__container">
          <MobileSliderBox />
          <MobileSliderBox />
        </div>
      </div>
    </div>
  );
};

export default OglašivačiMobileSlider;
