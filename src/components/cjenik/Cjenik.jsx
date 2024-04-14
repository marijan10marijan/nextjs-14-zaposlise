"use client";
import React, { useEffect, useState } from "react";
import styles from "./cjenik.module.css";
import CjenikCard from "./CjenikCard";
import CjenikHeader from "./CjenikHeader";
import CjenikBoxes from "./CjenikBoxes";
import CjenikFooter from "./CjenikFooter";
import CjenikKontaktForm from "./CjenikKontaktForm";

const Cjenik = () => {
  const [activeForm, setActiveForm] = useState(false);
  const [activeButton, setActiveButton] = useState("oglasiButton");
  const [activeCards, setActiveCards] = useState("oglasi");
  const [brojOglasa, setBrojOglasa] = useState(10);
  const [oglasiSavings, setOglasiSavings] = useState(0);
  const [paketiSavings, setPaketiSavings] = useState(brojOglasa / 2);
  const [prices, setPrices] = useState({
    click: 87,
    swipe: 227,
    match: 377,
  });

  // TOGGLE FORM FUNCTION, CHANGE STATE ON CLICK
  const toggleForm = () => {
    setActiveForm((prev) => !prev);
  };

  // USE EFFECT THAT PREVENT BODY FROM SCROLLING WHILE MODAL IS OPEN
  useEffect(() => {
    if (activeForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeForm]);

  // CHANGE BETWEEN OGLAS BUTTON AND PAKETI BUTTON
  const handleClick = () => {
    if (activeCards === "oglasi") {
      setActiveCards("paketi");
      setActiveButton("paketiButton");
    } else {
      setActiveCards("oglasi");
      setActiveButton("oglasiButton");
    }
  };

  // HANDLE RANGE INPUT TO CALCULATE PRICE
  const handleInputChange = (e) => {
    setBrojOglasa(e.target.value);
    setPaketiSavings(e.target.value / 2);
  };

  // CALCULATE PRICE BASED ON DISCOUNT AND NUMBER OF OGLAS
  let newPriceClickPaket;
  let newPriceSwipePaket;
  let newPriceMatchPaket;

  if (paketiSavings > 0) {
    newPriceClickPaket =
      prices.click * brojOglasa -
      (prices.click * brojOglasa * paketiSavings) / 100;
    newPriceSwipePaket =
      prices.swipe * brojOglasa -
      (prices.swipe * brojOglasa * paketiSavings) / 100;
    newPriceMatchPaket =
      prices.match * brojOglasa -
      (prices.match * brojOglasa * paketiSavings) / 100;
  }

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
              Po oglasu
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
              {activeCards === "oglasi" ? (
                <input
                  className={styles.cjenikPaketiRangeInputOglasi}
                  type="range"
                  min="10"
                  max="50"
                  step="10"
                  value="10"
                  onChange={() => {}}
                  disabled={true}
                />
              ) : (
                <input
                  className={styles.cjenikPaketiRangeInputPaketi}
                  type="range"
                  min="10"
                  max="50"
                  step="10"
                  value={brojOglasa}
                  onChange={handleInputChange}
                />
              )}
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
              toggleForm={toggleForm}
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
              toggleForm={toggleForm}
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
              toggleForm={toggleForm}
            />
          </div>
        ) : (
          <div className={styles.cjenikCards}>
            <CjenikCard
              name="Click"
              category="paket"
              price={newPriceClickPaket}
              oldPrice={prices.click * brojOglasa}
              paketiSavings={paketiSavings}
              features={[
                "Tekstualni oglas",
                "Video prijava",
                "Objava oglasa i promocija na društvenim mrežama",
                "Personalizirana korisnička podrška",
                "Automatizirana poruka odbijenice",
              ]}
              toggleForm={toggleForm}
            />
            <CjenikCard
              name="Swipe"
              category="paket"
              price={newPriceSwipePaket}
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
              toggleForm={toggleForm}
            />
            <CjenikCard
              name="Match"
              category="paket"
              price={newPriceMatchPaket}
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
              toggleForm={toggleForm}
            />
          </div>
        )}

        {/* CJENIK BOXES **************************************************************** */}
        <CjenikBoxes toggleForm={toggleForm} />
        {/* CJENIK FOOTER **************************************************************** */}
        <CjenikFooter toggleForm={toggleForm} />
      </div>
      {activeForm ? <CjenikKontaktForm setActiveForm={setActiveForm} /> : null}
    </section>
  );
};

export default Cjenik;
