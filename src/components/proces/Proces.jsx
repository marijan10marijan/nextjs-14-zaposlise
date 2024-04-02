"use client";
import React, { useEffect, useState } from "react";
import Upoznaj from "../upoznaj/Upoznaj";
import ProcesLeftSide from "./procesLeftSide/ProcesLeftSide";
import ProcesRightSide from "./procesRightSide/ProcesRightSide";

const Proces = () => {
  const cardsLength = 3;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
      if (index == cardsLength - 1) {
        setIndex(0);
      }
    }, 10000);

    return () => {
      clearTimeout(myTimeout);
    };
  }, [index]);

  return (
    <section className="proces">
      <div className="proces-header">
        <div className="proces-header__inside">
          <h2 className="proces-header__title">
            Kako Zaposlise olakšava proces pronalaženja kandidata?
          </h2>
          <p className="proces-header__desc line-height">
            Čak 60% kandidata odustaje od procesa prijave zbog dužine i
            kompleksnosti formulara. Zaposlise aplikacija rješava taj problem
            omogućujući ti kontaktiranje samo zainteresiranih kandidata koji već
            imaju ispunjene životopise. Tako olakšavamo proces pronalaženja
            kandidata i štedimo tvoje vrijeme.
          </p>
        </div>
      </div>
      <div className="proces-content">
        <div className="proces-content__inside">
          <ProcesLeftSide index={index} setIndex={setIndex} />
          <ProcesRightSide index={index} />
        </div>
      </div>
      <Upoznaj
        title={"Upoznaj buduće kolege danas – oni su ti na dohvat ruke."}
      />
    </section>
  );
};

export default Proces;
