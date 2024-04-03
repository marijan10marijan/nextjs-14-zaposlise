import React from "react";
import styles from "./kodeksPonašanja.module.css";

const KodeksPonašanja = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.kodeksTitle}>Kodeks ponašanja</h1>
        <p className={styles.kodeksGeneralno}>
          <strong>Generalno:</strong>
        </p>
        <p className={styles.kodeksDesc}> 
          Kodeks ponašanja Zaposlise.hr smjernica je za stvaranje profesionalnog
          i pozitivnog iskustva kako za korisnike koji traže posao, tako i za
          poslodavce ili regrutere.
        </p>
        <h2 className={styles.kodeksSubtitle}>Posloprimci:</h2>
        {/* POSLOPRIMCI LIST **********************************************************/}
        <ol className={styles.kodeksList}>
          <li>
            <strong>Ispravno i točno predstavljanje:</strong> Osigurajte da vaš
            profil bude istinit i da odražava vaše stvarne vještine, iskustvo i
            obrazovanje. Ne lažite o svojim kvalifikacijama jer to može imati
            negativne posljedice.
          </li>
          <li>
            <strong>Profesionalni ton komunikacije:</strong> Bilo da šaljete
            poruku poslodavcu ili komunicirate s drugim korisnicima, uvijek
            zadržavajte profesionalan i pristojan ton.
          </li>
          <li>
            <strong>Aktualizirajte svoj profil:</strong> Redovito ažurirajte
            svoj profil s novim informacijama o iskustvu, obrazovanju i
            vještinama kako biste poboljšali svoje šanse za pronalazak posla.
          </li>
          <li>
            <strong>Prilagodite svoj životopis:</strong> Kada se prijavljujete
            za određeni posao, prilagodite svoj životopis prema zahtjevima i
            potrebama poslodavca.
          </li>
          <li>
            <strong>Budite strpljivi i uporni:</strong> Traženje posla može
            potrajati, stoga ostanite strpljivi i nastavite s trudom i
            upornošću.
          </li>
          <li>
            <strong>Odgovarajte na poruke u razumnom roku:</strong> Ako dobijete
            poruku od poslodavca ili regrutera, odgovorite u razumnom roku kako
            biste pokazali svoj interes za posao.
          </li>
          <li>
            <strong>Nemojte zloupotrebljavati sustav:</strong> Ne šaljite
            neprikladne ili neželjene poruke drugim korisnicima. Poštujte
            pravila platforme i koristite je isključivo u svrhu traženja posla.
          </li>
          <li>
            <strong>Obratite pažnju na privatnost:</strong> Pazite na osobne
            podatke i ne dijelite ih s nepoznatim korisnicima.
          </li>
          <li>
            <strong>Zahvalite na prilici:</strong> Ako vas pozovu na intervju
            ili vam pruže priliku, uvijek se zahvalite na njihovom vremenu i
            prilici.
          </li>
          <li>
            <strong>Dijelite pozitivno iskustvo:</strong> Ako ste pronašli posao
            putem aplikacije, podijelite svoje pozitivno iskustvo s drugima kako
            bi se potaknulo povjerenje i kvalitetna interakcija među
            korisnicima.
          </li>
        </ol>
        <h2 className={styles.kodeksSubtitle}>Poslodavci:</h2>
        <p className={styles.kodeksDesc}>
          Kodeks ponašanja za poslodavce na Zaposlise.hr ima ključnu ulogu u
          stvaranju profesionalnog i poštenog okruženja za sve korisnike. Evo
          nekoliko važnih smjernica koje poslodavci mogu slijediti:
        </p>
        {/* POSLODAVCI LIST **********************************************************/}
        <ol className={styles.kodeksList}>
          <li>
            <strong>Objavite jasne i precizne oglase:</strong> Prilikom objave
            oglasa za posao, budite detaljni i precizni u opisu posla,
            zahtjevima i odgovornostima kako biste privukli relevantne
            kandidate.
          </li>
          <li>
            <strong>Odgovarajte kandidatima u razumnom roku:</strong> Kada
            primate prijave za posao, nastojte odgovoriti kandidatima u razumnom
            roku kako biste im pružili povratnu informaciju o njihovoj prijavi.
            Za ovo smo omogućili i opciju automatskog odgovora.
          </li>
          <li>
            <strong>Poštujte privatnost kandidata:</strong> Čuvajte osobne
            podatke kandidata i koristite ih isključivo u svrhu procjene njihove
            prijave i interesa za posao.
          </li>
          <li>
            <strong>Poštujte agendu intervjua:</strong> Ako ste dogovorili
            intervju s kandidatom, držite se dogovorenog vremena i datuma.
          </li>
          <li>
            <strong>Pružite konstruktivnu povratnu informaciju:</strong> Ako
            odlučite da kandidat nije odgovarajući za posao, pružite im
            konstruktivnu povratnu informaciju o razlozima te im zahvalite na
            interesu.
          </li>
          <li>
            <strong>Ne diskriminirajte:</strong> Nemojte diskriminirati
            kandidate na temelju rase, spola, dobi, vjeroispovijesti ili bilo
            kojeg drugog osobnog obilježja.
          </li>
          <li>
            <strong>Budite transparentni o postupku selekcije:</strong>{" "}
            Objasnite kandidatima kako će izgledati postupak selekcije i koliko
            vremena će biti potrebno za donošenje odluke.
          </li>
          <li>
            <strong>Pazite na komunikaciju:</strong> Komunicirajte s kandidatima
            na pristojan i profesionalan način, bez nepotrebnog odgađanja ili
            nedostatka odgovora.
          </li>
          <li>
            <strong>Poštujte odabir kandidata:</strong> Kada donesete odluku o
            zapošljavanju, poštujte odabir kandidata te obavijestite ostale
            kandidate o njihovom statusu.
          </li>
          <li>
            <strong>Pružite pozitivno iskustvo:</strong> Trudite se pružiti
            pozitivno iskustvo kandidatima, čak i ako niste u mogućnosti
            ponuditi posao. To može pozitivno utjecati na vašu reputaciju kao
            poslodavca.
          </li>
        </ol>
        <p className={styles.kodeksEndPadding}>&nbsp;</p>
      </div>
    </div>
  );
};

export default KodeksPonašanja;
