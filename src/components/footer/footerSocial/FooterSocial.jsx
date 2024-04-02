import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterSocial = () => {
  return (
    <div className="footer-flex__links">
      <Link href="https://zaposlise.hr/">
        <Image
          loading="lazy"
          className="footer-home__img"
          src="https://zaposlise.hr/wp-content/themes/ngtheme/assets/svg/zaposlise-logo-beta.svg"
          alt="zaposlise.hr beta logo"
          height={45}
          width={240}
        />
      </Link>
      <div className="footer-social">
        <Link href="https://www.facebook.com/zaposlisehrvatska" target="_blank">
          <Image
            loading="lazy"
            src="https://zaposlise.hr/wp-content/uploads/2022/08/Social-media-logo.png"
            alt="facebook društvena mreža slika unutar linka koji vodi do zaposlise facebook profila"
            width={32}
            height={32}
          />
        </Link>

        <Link href="https://www.instagram.com/zaposlise.hr/" target="_blank">
          <Image
            loading="lazy"
            src="https://zaposlise.hr/wp-content/uploads/2022/08/Social-media-logo-1.png"
            alt="instagram društvena mreža slika unutar linka koji vodi do zaposlise instagram profila"
            width={32}
            height={32}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/company/zaposlise/"
          target="_blank"
        >
          <Image
            loading="lazy"
            src="https://zaposlise.hr/wp-content/uploads/2022/08/Social-media-logo-2.png"
            alt="linkedIn društvena mreža slika unutar linka koji vodi do zaposlise linkedIn profila"
            width={32}
            height={32}
          />
        </Link>

        <Link href="https://www.youtube.com/@zaposlisehr." target="_blank">
          <Image
            loading="lazy"
            src="https://zaposlise.hr/wp-content/uploads/2022/08/Social-media-logo-3.png"
            alt="youtube društvena mreža slika unutar linka koji vodi do zaposlise youtube profila"
            width={32}
            height={32}
          />
        </Link>

        <Link href="https://www.tiktok.com/@zaposlise.hr" target="_blank">
          <Image
            loading="lazy"
            src="https://zaposlise.hr/wp-content/uploads/2022/08/Social-media-logo-4.png"
            alt="tikotok društvena mreža slika unutar linka koji vodi do zaposlise tiktok profila"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocial;
