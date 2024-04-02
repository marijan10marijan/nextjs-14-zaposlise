import React from "react";
import Link from "next/link";

const PotraziOglas = () => {
  return (
    <section>
      <div className="image__background-two"></div>
      <div className="potrazi">
        <div className="potrazi-container">
          <div className="potrazi-content">
            <h1 className="potrazi-content__title">
              <strong>Potraži oglas. Prijavi se. Zaposlise!</strong>
            </h1>
            <p className="potrazi-content__desc-one">
              Na Zaposlise platformi, jednostavno i brzo napreduj u karijeri.
            </p>
            <p className="potrazi-content__desc-two">
              Kreiraj svoj profil, komuniciraj s poslodavcima kroz live chat i
              ostvari svoje ciljeve.
            </p>
            <button className="potrazi-content__btn">
              <Link
                className="potrazi-content__btn-link"
                href="https://posao.zaposlise.hr/signin/create/user"
                target="_blank"
              >
                Registriraj se
              </Link>
            </button>
            <button className="potrazi-content__btn-mobile">
              <Link
                className="potrazi-content__btn-mobile-link"
                href="https://play.google.com/store/apps/details?id=com.zaposlise.hr&pcampaignid=web_share&pli=1"
                target="_blank"
              >
                Preuzmi aplikaciju
              </Link>
            </button>
            <div className="potrazi-content__store">
              <Link
                className="potrazi-content__store-link"
                href="https://apps.apple.com/us/app/zaposlise-hr/id6443617736?itsct=apps_box_link&itscg=30200"
                target="_blank"
              >
                <img
                  className="potrazi-content__store-img"
                  src="https://zaposlise.hr/wp-content/uploads/2021/11/app-store.png"
                  alt="app store slika za preuzimanje aplikacije na iPhone uređajima"
                />
              </Link>
              <Link
                className="potrazi-content__store-link"
                href="https://play.google.com/store/apps/details?id=com.zaposlise.hr&pcampaignid=web_share"
                target="_blank"
              >
                <img
                  className="potrazi-content__store-img"
                  src="https://zaposlise.hr/wp-content/uploads/2021/11/google-play.png"
                  alt="google play slika za preuzimanje aplikacije na iPhone uređajima"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotraziOglas;
