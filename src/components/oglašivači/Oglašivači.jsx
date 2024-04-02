import React from "react";
import OglašivačiDesktopSlider from "./oglašivačiDesktopSlider/OglašivačiDesktopSlider";
import OglašivačiMobileSlider from "./oglašivačiMobileSlider/OglašivačiMobileSlider";
import OglašivačiDesktopSliderOne from "./oglašivačiDesktopSliderOne/OglašivačiDesktopSliderOne";

const Oglašivači = () => {
  return (
    <div>
      <div className="oglašivači">
        <div className="oglašivači-decoration__img"></div>
        <div className="oglašivači__title">
          <h2>Naši oglašivači</h2>
        </div>
        <div className="desktop-slider">
          <OglašivačiDesktopSliderOne />
        </div>
      </div>
      <OglašivačiDesktopSlider />
      <OglašivačiMobileSlider />
    </div>
  );
};

export default Oglašivači;
