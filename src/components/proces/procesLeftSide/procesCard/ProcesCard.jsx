import React from "react";

const ProcesCard = ({ title, description, imageSrc, imageAlt, isActive }) => {
  return (
    <div
      className={
        isActive ? "proces-left__card active-card" : "proces-left__card"
      }
    >
      <img
        loading="lazy"
        className={
          isActive ? "proces-left__image active-icon" : "proces-left__image"
        }
        src={imageSrc}
        alt={imageAlt}
      />
      <h3
        className={
          isActive ? "proces-left__title active-title" : "proces-left__title"
        }
      >
        {title}
      </h3>
      <div className="left-card__bottom">
        <p
          className={
            isActive ? "left-bottom__text active-text" : "left-bottom__text"
          }
        >
          {description}
        </p>
      </div>
      <div
        className={isActive ? "green-line active-green-line" : "green-line"}
      ></div>
    </div>
  );
};

export default ProcesCard;
