import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <main>
      <div className="main">
        <div className="main-container">
          <div className="main-container__content">
            <h1 className="main-title">
              Nove generacije talenata zahtijevaju inovativan pristup
            </h1>
            <p className="main-description">
              Objavi oglas za posao i jednostavnim korakom pronađi kandidate
              koji se uklapaju u tvoju organizacijsku kulturu. Bez skrivenih
              uvjeta i dodatnih troškova.
            </p>
            <Link
              className="main-link__button"
              href="https://posao.zaposlise.hr/signin/create/recruiter"
            >
              Objavi oglas
            </Link>
          </div>
        </div>
      </div>
      <div className="image__background"></div>
    </main>
  );
};

export default Main;
