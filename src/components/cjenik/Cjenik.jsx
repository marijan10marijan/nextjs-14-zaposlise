"use client";
import React, { useState } from "react";
import styles from "./cjenik.module.css";
import CjenikCard from "./CjenikCard";
import CjenikHeader from "./CjenikHeader";
import CjenikBoxes from "./CjenikBoxes";
import CjenikFooter from "./CjenikFooter";

const Cjenik = () => {
  const [activeButton, setActiveButton] = useState("oglasiButton");
  const [activeCards, setActiveCards] = useState("oglasi");
  const [brojOglasa, setBrojOglasa] = useState(30);
  const [oglasiSavings, oglasiSetSavings] = useState(0);
  const [paketiSavings, paketiSetSavings] = useState(5);
  const [prices, setPrices] = useState({
    click: 87,
    swipe: 227,
    match: 377,
  });

  const handleClick = () => {
    if (activeCards === "oglasi") {
      setActiveCards("paketi");
      setActiveButton("paketiButton");
    } else {
      setActiveCards("oglasi");
      setActiveButton("oglasiButton");
    }
  };

  let savingsPrice;

  if (paketiSavings > 0) {
    savingsPrice = (prices.click * brojOglasa * paketiSavings) / 100;
  } else {
    savingsPrice = 0;
  }
  const newPriceClick = prices.click * brojOglasa - savingsPrice;
  const newPriceSwipe = prices.swipe * brojOglasa - savingsPrice;
  const newPriceMatch = prices.match * brojOglasa - savingsPrice;

  return (
    <section className={styles.cjenik}>
      <div className={styles.cjenikContainer}>
        {/* CJENIK HEADER *************************************************** */}
        <CjenikHeader />
        {/* CJENIK BUTTONS AND RANGE INPUT *************************************************** */}
        <div className={styles.cjenikPaketi}>
          <div className={styles.cjenikPaketiButtons}>
            <button
              className={
                activeButton === "oglasiButton"
                  ? `${styles.cjenikPaketiButtonsBtn} ${styles.cjenikPaketiButtonsBtnActive}`
                  : `${styles.cjenikPaketiButtonsBtn}`
              }
              onClick={handleClick}
            >
              Po Oglasu
            </button>
            <button
              className={
                activeButton === "paketiButton"
                  ? `${styles.cjenikPaketiButtonsBtn} ${styles.cjenikPaketiButtonsBtnActive}`
                  : `${styles.cjenikPaketiButtonsBtn}`
              }
              onClick={handleClick}
            >
              Paketi
            </button>
          </div>
          <div className={styles.cjenikPaketiRange}>
            <p>Broj oglasa godišnje</p>
            <div className={styles.cjenikPaketiRangeInput}>
              <input
                type="range"
                min="10"
                max="50"
                step={"10"}
                defaultValue={brojOglasa}
                value={brojOglasa}
                onChange={(e) => setBrojOglasa(e.target.value)}
                // disabled={activeCards === "oglasi" ? true : false}
              />
            </div>
          </div>
        </div>
        {/* CJENIK CARDS *************************************************** */}
        {activeCards === "oglasi" ? (
          <div className={styles.cjenikCards}>
            <CjenikCard
              name="Click"
              category="oglas"
              price={prices.click}
              oglasiSavings={oglasiSavings}
              features={[
                "Tekstualni oglas",
                "Video prijava",
                "Objava oglasa i promocija na društvenim mrežama",
                "Personalizirana korisnička podrška",
                "Automatizirana poruka odbijenice",
              ]}
            />
            <CjenikCard
              name="Swipe"
              category="oglas"
              price={prices.swipe}
              oglasiSavings={oglasiSavings}
              features={[
                "Tekstualni oglas",
                "Pozadinska fotografija",
                "Video prijava",
                "Istaknuto u kategoriji",
                "Pozivnica 10 komada",
                "Objava oglasa i promocija na društvenim mrežama",
                "Personalizirana korisnička podrška",
                "Automatizirana poruka odbijenice",
                "Produljenje oglasa",
              ]}
            />
            <CjenikCard
              name="Match"
              category="oglas"
              price={prices.match}
              oglasiSavings={oglasiSavings}
              features={[
                "Tekstualni oglas i/ili video oglas",
                "Pozadinska fotografija",
                "Video prijava",
                "Istaknuto na naslovnici",
                "Pozivnica 20 komada",
                "Objava oglasa i promocija na društvenim mrežama",
                "Objava PR članka na blogu zaposlise.hr, na početnoj stranici portala i aplikaciji zaposlise.hr",
                "Newsletter promocija tvrtke (1 mjesečno)",
                "Personalizirana korisnička podrška",
                "Automatizirana poruka odbijenice",
                "Produljenje oglasa",
              ]}
            />
          </div>
        ) : (
          <div className={styles.cjenikCards}>
            <CjenikCard
              name="Click"
              category="paket"
              price={newPriceClick}
              oldPrice={prices.click * brojOglasa}
              paketiSavings={paketiSavings}
              features={[
                "Tekstualni oglas",
                "Video prijava",
                "Objava oglasa i promocija na društvenim mrežama",
                "Personalizirana korisnička podrška",
                "Automatizirana poruka odbijenice",
              ]}
            />
            <CjenikCard
              name="Swipe"
              category="paket"
              price={newPriceSwipe}
              oldPrice={prices.swipe * brojOglasa}
              paketiSavings={paketiSavings}
              features={[
                "Tekstualni oglas",
                "Pozadinska fotografija",
                "Video prijava",
                "Istaknuto u kategoriji",
                "Pozivnica 10 komada",
                "Objava oglasa i promocija na društvenim mrežama",
                "Personalizirana korisnička podrška",
                "Automatizirana poruka odbijenice",
                "Produljenje oglasa",
              ]}
            />
            <CjenikCard
              name="Match"
              category="paket"
              price={newPriceMatch}
              oldPrice={prices.match * brojOglasa}
              paketiSavings={paketiSavings}
              features={[
                "Tekstualni oglas i/ili video oglas",
                "Pozadinska fotografija",
                "Video prijava",
                "Istaknuto na naslovnici",
                "Pozivnica 20 komada",
                "Objava oglasa i promocija na društvenim mrežama",
                "Objava PR članka na blogu zaposlise.hr, na početnoj stranici portala i aplikaciji zaposlise.hr",
                "Newsletter promocija tvrtke (1 mjesečno)",
                "Personalizirana korisnička podrška",
                "Automatizirana poruka odbijenice",
                "Produljenje oglasa",
              ]}
            />
          </div>
        )}

        {/* CJENIK BOXES **************************************************************** */}
        <CjenikBoxes />
        {/* CJENIK FOOTER **************************************************************** */}
        <CjenikFooter />
      </div>
    </section>
  );
};

export default Cjenik;
