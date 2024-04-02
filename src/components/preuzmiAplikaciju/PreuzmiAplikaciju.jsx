import React from "react";
import Link from "next/link";

const PreuzmiAplikaciju = () => {
  return (
    <section className="preuzmi-full">
      <div className="preuzmi">
        <div className="preuzmi-left">
          <img
            loading="lazy"
            src="https://zaposlise.hr/wp-content/themes/ngtheme/assets/i/mobile-green-phones-2@2x.png"
            alt="slika koja prikazuje mobilnu aplikaciju zaposlise.hr"
          />
        </div>
        <div className="preuzmi-right">
          <p className="preuzmi-right__title">Preuzmi aplikaciju</p>
          <div className="preuzmi-right__flex">
            <Link
              href="https://apps.apple.com/us/app/zaposlise-hr/id6443617736?ign-itscg=30200&ign-itsct=apps_box_link"
              target="_blank"
            >
              <img
                loading="lazy"
                src="https://zaposlise.hr/wp-content/uploads/2021/11/app-store.png"
                alt="app store slika za preuzimanje aplikacije na iPhone uređajima"
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.zaposlise.hr&pcampaignid=web_share"
              target="_blank"
            >
              <img
                loading="lazy"
                src="https://zaposlise.hr/wp-content/uploads/2021/11/google-play.png"
                alt="google play slika za preuzimanje aplikacije na android uređajima"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreuzmiAplikaciju;
