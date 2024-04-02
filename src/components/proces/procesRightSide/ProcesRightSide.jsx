import React from "react";

const ProcesRightSide = ({ index }) => {
  return (
    <div className="proces-right">
      <div className="proces-right__decoration"></div>
      <div className="proces-right__box">
        <img 
          className={
            index == 0 ? "right-box__img active-img" : "right-box__img"
          }
          src="https://zaposlise.hr/wp-content/uploads/2023/08/ispuni-profil-tvrtke-1_4.png"
          alt="ispuni profil tvrtke"
        />
      </div>
      <div className="proces-right__box">
        <img
          className={
            index == 1 ? "right-box__img active-img" : "right-box__img"
          }
          src="https://zaposlise.hr/wp-content/uploads/2023/08/poslodavci-page-2-pronadji-profil-posloprimca@2x.png"
          alt="pronadji profil posloprimca"
        />
      </div>
      <div className="proces-right__box">
        <img
          className={
            index == 2 ? "right-box__img active-img" : "right-box__img"
          }
          src="https://zaposlise.hr/wp-content/uploads/2023/08/poslodavci-page-3-izravno-komuniciraj-i-organizirano-arhiviraj@2x.png"
          alt="izravno komuniciraj i organizirano arhiviraj"
        />
      </div>
    </div>
  );
};

export default ProcesRightSide;
