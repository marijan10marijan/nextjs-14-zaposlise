import React from "react";
import styles from "./oNama.module.css";

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
    </main>
  );
};

export default ONamaPrica;
