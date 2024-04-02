import Link from "next/link";

const HeaderHamburger = ({ isActive, handleHamburger }) => {
  return (
    <div className="header-mobile">
      <div className="header-mobile__btn">
        <Link
          className="prijava"
          href="https://posao.zaposlise.hr/signin"
          target="_blank"
        >
          Prijavi se
        </Link>
      </div>
      <div className="menu">
        <div
          className={
            isActive
              ? "header-mobile__hamburger show"
              : "header-mobile__hamburger"
          }
          id="hamburger"
          onClick={handleHamburger}
        >
          <div className={isActive ? "line-one show" : "line-one"}></div>
          <div className={isActive ? "line-two show" : "line-two"}></div>
          <div className={isActive ? "line-three show" : "line-three"}></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHamburger;
