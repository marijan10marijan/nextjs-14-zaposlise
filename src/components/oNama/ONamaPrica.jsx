import React from "react";
import styles from "./oNama.module.css";
import Image from "next/image";

const ONamaPrica = () => {
  return (
    <main className={styles.nasaPrica}>
      <div className={styles.nasaPricaBoxOne}>
        <h3 className={styles.nasaPricaBoxOneTitle}>Naša priča</h3>
        <p className={styles.nasaPricaBoxOneText}>
          Koristimo modernu tehnologiju za brzo povezivanje tvrtki s talentima i
          kandidatima s idealnim poslovima, eliminirajući posrednike i štedeći
          vrijeme i novac zahvaljujući opciji direktne komunikacije.
        </p>
        <p className={styles.nasaPricaBoxOneText}>
          <strong>
            Napravili smo mali iskorak za aplikaciju i velik korak za one koji
            su se ozbiljno posvetili traženju novog zaposlenja – u potpunosti
            smo ukinuli potrebu za ispunjavanjem kompliciranih online prijava.
          </strong>
        </p>
      </div>
      <div className={styles.nasaPricaBoxTwo}>
        <div className={styles.nasaPricaBoxTwoImage}>
          <Image
            src={"https://zaposlise.hr/wp-content/uploads/2021/11/img1.jpg"}
            alt="slika poslovnog sastanka"
            fill
          />
          <div className={styles.nasaPricaBoxTwoDecoration}></div>
        </div>
        <div className={styles.nasaPricaBoxTwoContent}>
          <h3>Što nas pokreće?</h3>
          <p>
            Vjerujemo da je idealan posao današnjice ipak malo više od plaće i
            da sam proces pronalaženja onog savršenog spoja između poslodavca i
            zaposlenika treba biti jednostavan i ali i dostojanstven.
          </p>
          <p>
            Istražili smo pregršt alata i aplikacije za pronalaženje talenata
            koje trenutno koriste tvrtke u RH. Direktna komunikacija je naša
            najbolja praksa za obostrano zadovoljstvo i kvalitetnu poslovnu
            suradnju. Prilagodili smo sve procese novim generacijama koje rade u
            “petoj brzini”.
          </p>
          <p>
            Naš cilj je postati promjena na tržištu rada, ukloniti formalnosti i
            barijere, stvarati nove veze i prilike.
          </p>
          <p>Mi smo vaša podrška na ovom novom putovanju.</p>
        </div>
        {/* <div className={styles.nasaPricaBoxTwoDecoration}></div> */}
      </div>
      <div className={styles.nasaPricaDecoration}></div>
    </main>
  );
};

export default ONamaPrica;
