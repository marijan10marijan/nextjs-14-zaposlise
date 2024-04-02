import React from "react";

const NapredujCard = ({
  title,
  titleSecondRow,
  description,
  imageSrc,
  imageAlt,
  isActive,
}) => {
  return (
    <div
      className={
        isActive
          ? "slider-right__card slider-active-right__card"
          : "slider-right__card"
      }
    >
      <div
        className={
          isActive
            ? "slider-right__img slider-active-right__img"
            : "slider-right__img"
        }
      >
        <img
          className={
            isActive ? "slider__img slider-card-active__img" : "slider__img "
          }
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="slider-card__content">
        <h4 className="slider-card__content-title">
          {title} <br />
          {titleSecondRow}
        </h4>
        <p
          className={
            isActive
              ? "slider-card__content-desc slider-active__desc"
              : "slider-card__content-desc "
          }
        >
          {description}
        </p>
      </div>
      <div
        className={
          isActive
            ? "slider-green__line slider-active-green__line"
            : "slider-green__line "
        }
      ></div>
    </div>
  );
};

export default NapredujCard;
