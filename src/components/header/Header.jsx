"use client";
import HeaderLogo from "./headerLogo/HeaderLogo";
import HeaderHamburger from "./headerHamburger/HeaderHamburger";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleHamburger = () => {
    setIsActive((prev) => !prev);
  };

  const handleLinks = () => {
    setIsActive(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <HeaderLogo />
          <HeaderHamburger
            handleHamburger={handleHamburger}
            isActive={isActive}
          />
          <DesktopNavbar />
        </nav>
      </div>
      <MobileNavbar isActive={isActive} handleLinks={handleLinks} />
    </header>
  );
}

export default Header;
