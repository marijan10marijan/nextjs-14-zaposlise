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
      <div className={styles.cjenikCardTop}>
        <div className={styles.cjenikCardTopData}>
          <p>{name}</p>
          <p>
            Ušteda{" "}
            <span>{category === "oglas" ? oglasiSavings : paketiSavings}%</span>
          </p>
        </div>
        <div className={styles.cjenikCardPrice}>
          <p>{price}</p>
          {oldPrice ? <p>{oldPrice}</p> : null}
        </div>
        {features.map((feature) => (
          <div key={feature}>
            <img
              src="https://zaposlise.hr/wp-content/themes/ngtheme/assets/sass/../../assets/i/square-checkbox-solid@2x.png"
              alt="ikona kvačice"
            />
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <div className={styles.cjenikCardBottom}>
        <button>Pošalji upit</button>
        <p>
          * Cijene su izražene u EUR, bez PDV-a. Jedan oglas se odnosi na objavu
          jedne radne pozicije.
        </p>
      </div>
    </article>
  );
};

export default CjenikCard;
