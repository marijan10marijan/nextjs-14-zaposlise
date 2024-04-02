import React from "react";

const NapredujLeftSide = ({ index }) => {
  return (
    <div className="slider-left">
      <div className="slider-left__box">
        <img
          className={
            index == 0
              ? "slider-left__box-img slider-active__img"
              : "slider-left__box-img"
          }
          src="https://zaposlise.hr/wp-content/uploads/2023/08/1-Zaposlise-posloprimci-page-Tvoj-profil-tvoj-zivotopis@2x.png"
          alt=""
        />
      </div>
      <div className="slider-left__box">
        <img
          className={
            index == 1
              ? "slider-left__box-img slider-active__img"
              : "slider-left__box-img"
          }
          src="https://zaposlise.hr/wp-content/uploads/2023/08/2-Zaposlise-posloprimci-page-Nitko-ne-treba-znati-da-trazis-posao@2x.png"
          alt=""
        />
      </div>
      <div className="slider-left__box">
        <img
          className={
            index == 2
              ? "slider-left__box-img slider-active__img"
              : "slider-left__box-img"
          }
          src="https://zaposlise.hr/wp-content/uploads/2023/08/3-Zaposlise-posloprimci-page-Prijavi-se-ili-preskoci-oglas-u-sekundi@2x.png"
          alt=""
        />
      </div>
      <div className="slider-left__box">
        <img
          className={
            index == 3
              ? "slider-left__box-img slider-active__img"
              : "slider-left__box-img"
          }
          src="https://zaposlise.hr/wp-content/uploads/2023/08/4-Zaposlise-posloprimci-page-Dopisuj-se-sa-potencijalnim-poslodavcem@2x.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NapredujLeftSide;
