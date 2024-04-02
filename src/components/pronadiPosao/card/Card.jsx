import React from 'react'

const Card = ({title, description, imageSrc, imageAlt}) => {
  return (
    <li className="pronadi-container__card">
      <div className="pronadi-container__left">
        <img
          loading="lazy"
          className="pronadi-left__img"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="pronadi-container__right">
        <h3 className="pronadi-right__title">
          {title}
        </h3>
        <p className="pronadi-right__desc">
          {description}
        </p>
      </div>
    </li>
  );
}

export default Card