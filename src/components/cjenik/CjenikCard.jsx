import React from "react";
import styles from "./cjenikCard.module.css";

const CjenikCard = ({
  name,
  price,
  oldPrice,
  category,
  oglasiSavings,
  paketiSavings,
  features,
}) => {
  return (
    <article className={styles.cjenikCard}>
      <div className={styles.cjenikCardData}>
        <p>{name}</p>
        <p>
          Ušteda{" "}
          <span>{category === "oglas" ? oglasiSavings : paketiSavings}%</span>
        </p>
        <div className={styles.cjenikCardPrice}>
          <p>{price}</p>
          {oldPrice ? <p>{oldPrice}</p> : null}
        </div>
      </div>
      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <img
                className={styles.cjenikCardIcon}
              src="https://zaposlise.hr/wp-content/themes/ngtheme/assets/sass/../../assets/i/square-checkbox-solid@2x.png"
              alt="ikona kvačice"
            />
            <p className={styles.cjenikCardListElement}>{feature}</p>
          </li>
        ))}
      </ul>
      <button>Pošalji upit</button>
      <p className={styles.cjenikCardSmallParagraph}>
        * Cijene su izražene u EUR, bez PDV-a. Jedan oglas se odnosi na objavu
        jedne radne pozicije.
      </p>
    </article>
  );
};

export default CjenikCard;
