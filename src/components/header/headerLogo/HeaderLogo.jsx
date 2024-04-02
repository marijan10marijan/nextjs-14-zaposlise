import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <Link href="https://zaposlise.hr/" className="header-logo__link">
        <Image
          src="https://zaposlise.hr/wp-content/themes/ngtheme/assets/svg/zaposlise-logo-beta.svg"
          title="Zaposlise.hr"
          alt="Zaposlise.hr"
          fill={true}
          priority={true}
          className="header-logo__img"
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
