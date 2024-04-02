import Link from "next/link";
import React from "react";

const FooterNavigation = () => {
  return (
    <div className="footer-flex__navigation">
      <div className="navigation-left">
        <h2>Navigacija</h2>
        <ul className="navigation-left__items">
          <li>
            <Link href="https://zaposlise.hr/"> Početna </Link>
          </li>
          <li>
            <Link href="/poslodavci"> Poslodavci </Link>
          </li>
          <li>
            <Link href="/posloprimci"> Posloprimci </Link>
          </li>
          <li>
            <Link href="https://zaposlise.hr/blog"> Blog </Link>
          </li>
          <li>
            <Link href="/kalkulator-place/bruto-u-neto">Kalkulator plaće</Link>
          </li>
          <li>
            <Link href="https://posao.zaposlise.hr/"> Oglasi </Link>
          </li>
          <li>
            <Link href="/cjenik"> Cjenik </Link>
          </li>
          <li>
            <Link href="/o-nama"> O nama </Link>
          </li>
          <li>
            <Link href="/kontakt"> Kontakt </Link>
          </li>
        </ul>
      </div>

      <div className="navigation-right">
        <h2>Blog</h2>

        <ul className="navigation-right__items">
          <li>
            <Link href="https://zaposlise.hr/blog"> Sve </Link>
          </li>
          <li>
            <Link href="https://zaposlise.hr/category/karijera">Karijera</Link>
          </li>
          <li>
            <Link href="https://zaposlise.hr/category/novosti"> Novosti </Link>
          </li>
          <li>
            <Link href="https://zaposlise.hr/category/place"> Plaće </Link>
          </li>
          <li>
            <Link href="https://zaposlise.hr/category/savjeti"> Savjeti </Link>
          </li>
          <li>
            <Link href="https://zaposlise.hr/category/vijesti"> Vijesti </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigation;
