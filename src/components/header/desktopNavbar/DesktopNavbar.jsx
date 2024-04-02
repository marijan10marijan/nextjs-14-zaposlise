"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const DesktopNavbar = () => {
  const pathName = usePathname();
  return (
    <div className="header-links">
      <ul>
        <li>
          <div className="header-animation__line"></div>
          <Link className="link" href="https://zaposlise.hr/">
            Naslovna
          </Link>
        </li>
        <li>
          <div
            className={
              pathName == "/poslodavci"
                ? "header-animation__line active-header-animation__line"
                : "header-animation__line"
            }
          ></div>
          <Link
            className={pathName == "/poslodavci" ? "link link-active" : "link"}
            href="/poslodavci"
          >
            Poslodavci
          </Link>
        </li>
        <li>
          <div
            className={
              pathName == "/posloprimci"
                ? "header-animation__line active-header-animation__line"
                : "header-animation__line"
            }
          ></div>
          <Link
            className={pathName == "/posloprimci" ? "link link-active" : "link"}
            href="/posloprimci"
          >
            Posloprimci
          </Link>
        </li>
        <li>
          <div className="header-animation__line"></div>
          <Link className="link" href="https://zaposlise.hr/blog">
            Blog
          </Link>
        </li>
        <li>
          <div className="header-animation__line"></div>
          <Link
            className="link"
            href="https://zaposlise.hr/kalkulator-place/bruto-u-neto"
          >
            Kalkulator Plaće
          </Link>
        </li>
        <li>
          <div className="header-animation__line"></div>
          <Link className="link" href="https://posao.zaposlise.hr/">
            Oglasi
          </Link>
        </li>
        <li>
          <Link className="link login" href="https://posao.zaposlise.hr/signin">
            Login
          </Link>
        </li>
        <li>
          <Link
            className="link register"
            href="https://posao.zaposlise.hr/signin/create"
          >
            Registriraj se
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavbar;
