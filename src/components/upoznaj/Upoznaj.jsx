import React from "react";

const Upoznaj = ({ title, stylePosition }) => {
  return (
    <div
      className={
        stylePosition == "upoznajDva"
          ? "upoznaj-container upoznaj-container__dva"
          : "upoznaj-container"
      }
    >
      <p className="upoznaj-title">{title}</p>
      <div className="upoznaj-links">
        <a
          href="https://posao.zaposlise.hr/signin"
          target="_blank"
          className="upoznaj-login"
        >
          Login
        </a>
        <a
          href="https://posao.zaposlise.hr/signin/create"
          className="upoznaj-register"
          target="_blank"
        >
          Registriraj se
        </a>
      </div>
    </div>
  );
};

export default Upoznaj;
