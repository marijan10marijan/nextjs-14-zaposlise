import React from "react";
import styles from "./cjenik.module.css";

const CjenikHeader = () => {
  return (
    <div className={styles.cjenikHeader}>
      <h1 className={styles.cjenikHeaderTitle}>Pristupačno i transparentno</h1>
      <p className={styles.cjenikHeaderDescription}>
        Vjerujemo da je ulaganje u ljude, ulaganje u rast i budućnost. Naša
        ponuda sadrži raznolike opcije oglašavanja prilagođene poduzećima u svim
        fazama rasta. Nema skrivenih troškova niti iznenađenja. Ne pronađete li
        odgovarajuću ponudu u našem standardnom cjeniku, kontaktirajte nas za
        personalizirani pristup i suradnju prilagođenu vašim potrebama.
      </p>
    </div>
  );
};

export default CjenikHeader;
