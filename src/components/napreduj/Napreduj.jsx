"use client";
import React, { useEffect, useState } from "react";
import Upoznaj from "../upoznaj/Upoznaj";
import NapredujLeftSide from "./napredujLeftSide/NapredujLeftSide";
import NapredujRightSide from "./napredujRightSide/NapredujRightSide";
import NapredujText from "./napredujText/NapredujText";

const Napreduj = () => {
  const cardsLength = 4;
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
    <section className="napreduj">
      <Upoznaj title={"Pronađi oglas i Zaposlise."} />

      <div className="napreduj-container">
        <NapredujText />
        <div className="napreduj-slider">
          <NapredujLeftSide index={index} />
          <NapredujRightSide index={index} setIndex={setIndex} />
        </div>
      </div>
    </section>
  );
};

export default Napreduj;
