import React from "react";
import Card from "./card/Card";

const PronadiPosao = () => {
  return (
    <section className="pronadi-section">
      <div className="pronadi">
        <div className="pronadi-header">
          <h1 className="pronadi-header__title">
            Pronađi posao koji ćeš voljeti. <br />
            Brzo. Vrlo brzo.
          </h1>
          <p className="pronadi-header__descr">
            Isprobaj potpuno novi način pronalaska posla, bez dodatnih
            komplikacija. <br />
            Samo uperi prstom u oglas koji ti se sviđa, a mi ćemo ti omogućiti
            da to ostvariš.
          </p>
        </div>
        <ul className="pronadi-container">
          <Card
            title="Jasno komuniciraj svoja očekivanja"
            description="Ne potcjenjuj svoje znanje i vještine. Na svojem profilu imaš
                važno polje koje ti omogućuje da upišeš svoj nivo stručnosti i
                minimalnu očekivanu plaću."
            imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon1-5.png"
            imageAlt="slika ikone za prvu karticu"
          />
          <Card
            title="Preskoči papirologiju"
            description=" Tvoj profil je tvoja prijava. Brže ćeš se prijaviti na oglas
                nego pročitati ovu rečenicu. Kod nas nema mjesta za motivacijska
                pisma, jer vjerujemo da tvoje vještine i iskustvo govore umjesto
                tebe."
            imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon2-5.png"
            imageAlt="slika ikone za drugu karticu"
          />
          <Card
            title="Ostani incognito"
            description="Ako si zaposlen i tražiš novog poslodavca, tvoja privatnost je
                na prvom mjestu. Tvoj profil ostaje tajna sve dok se ne odlučiš
                prijaviti na oglas. Možeš istraživati i razmatrati opcije bez
                ikakvog pritiska."
            imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon3-5.png"
            imageAlt="slika ikone za trecu karticu"
          />
          <Card
            title="Dok tražiš poslove, poslovi pronalaze tebe"
            description=" Ako se odlučiš objaviti svoj profil, otvaraš vrata mogućnostima.
                Poslodavci te mogu primijetiti kao potencijalnog kandidata za
                svoja oglašena radna mjesta. To je sjajna startna pozicija koja
                ti pruža prednost u postupku zapošljavanja."
            imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon4-3.png"
            imageAlt="slika ikone za cetvrtu karticu"
          />
          <Card
            title="Odaberi najdraži oglas po transparentnim kriterijima"
            description="U Zaposlise vjerujemo da je važno jasno komunicirati zahtjeve i
                pogodnosti. Zato naši oglasi obuhvaćaju raspon plaća, pogodnosti
                za zaposlene i sve detalje koje bi svaki potencijalni kandidat
                trebao znati odmah."
            imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon5-2.png"
            imageAlt="slika ikone za petu karticu"
          />
          <Card
            title="Pokaži svoju kreativnu crtu"
            description="Ako želiš, možeš snimiti kratak video CV. To je odličan način da
                se predstaviš na autentičan i zanimljiv način. Ako si
                sramežljiv, nema problema – ta opcija nije obavezna i
                jednostavno nemoj."
            imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon6-2.png"
            imageAlt="slika ikone za sestu karticu"
          />
        </ul>
      </div>
    </section>
  );
};

export default PronadiPosao;
