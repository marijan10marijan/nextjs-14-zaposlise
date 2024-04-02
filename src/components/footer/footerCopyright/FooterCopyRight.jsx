import Link from "next/link";
import React from "react";

const FooterCopyRight = () => {
  return (
    <div className="footer-end">
      <p className="line-height">
        &copy; <span className="year">{new Date().getFullYear()}</span>{" "}
        <b>zaposlise.hr</b>. Sva prava pridržana.
      </p>
      <div>
        <Link className="a line-height" href="/uvjeti-koristenja">
          Uvjeti korištenja
        </Link>
        <Link className="a line-height" href="/politika-privatnosti">
          Politika privatnosti
        </Link>
        <Link className="a line-height" href="/kodeks-ponasanja">
          Kodeks ponašanja
        </Link>
      </div>
    </div>
  );
};

export default FooterCopyRight;
