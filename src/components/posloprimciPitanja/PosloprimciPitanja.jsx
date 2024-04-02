import React from "react";
import Pitanje from "../pitanja/pitanje/Pitanje";

const PosloprimciPitanja = () => {
  return (
    <section className="pitanja-full pitanja-full-dva">
      <div className="pitanja-decoration__img"></div>
      <div className="pitanja">
        <h4 className="pitanja-naslov">Često postavljana pitanja</h4>

        <Pitanje
          title="1. Kako mogu odmah pristupiti oglasima za posao na Zaposlise?"
          description="Razumijemo da si nestrpljiv da vidiš oglase za posao. Sve što trebaš
            napraviti je otvoriti korisnički profil na Zaposlise. Za
            pregledavanje i prijavu na oglase, preporučujemo da svoj profil
            popuniš barem 75%. Naravno, mi podržavamo i 100% ispunjenost
            profila, jer što više informacija pružiš, veće su šanse da ćeš
            privući pažnju poslodavaca koji traže upravo tebe."
        />
        <Pitanje
          title="2. Trebam li ispuniti baš cijeli profil?"
          description="Za pregledavanje oglasa i prijavu na poslove, ne moraš ništa
            posebno, ali savjetujemo da popuniš barem 75% svog profila. To će ti
            omogućiti veću fleksibilnost i mogućnost prijave na željene poslove.
            Također, što više informacija pružiš o sebi, veće su šanse da će te
            poslodavci primijetiti i kontaktirati."
        />
        <Pitanje
          title="3. Sviđa mi se kako me nagovarate, što se dogodi nakon što sam
              popunio profil?"
          description=" Tvoj popunjeni profil pretvara se u atraktivni životopis koji je
            dostupan najboljim poslodavcima. Nema potrebe za dodatnim
            nagovaranjem, jer znamo da želiš ostaviti dobar dojam i privući
            pažnju poslodavaca."
        />
        <Pitanje
          title=" 4. Kako znam da je moj profil vidljiv poslodavcima?"
          description='Jednostavno! U postavkama svog profila samo označiš kućicu "Želim da
            moj profil bude vidljiv poslodavcima" i pripremi se za obilje ponuda
            za super poslove. Ako se ikad predomisliš, samo isključi tu opciju
            na svom profilu.'
        />
        <Pitanje
          title="5. Zna li moj direktor da koristim Zaposlise?"
          description="Pa znaš kako kažu, lakše je pronaći izgubljeni daljinski upravljač
            nego te pronaći na ovoj platformi. Kako bi bio siguran, jednostavno
            isključi opciju vidljivosti profila. I znaj da ne moraš brinuti da
            će te tvoj šef pronaći - osim ako baš ne odeš i prijaviš se za posao
            u tvrtku njegovog najboljeg prijatelja! Tvoj profil je vidljiv samo
            u dva slučaja: ako se prijaviš na aktivan oglas (i tada ga vidi samo
            poslodavac koji je postavio oglas) ili ako si odabrao opciju
            vidljivosti profila (u tom slučaju je profil vidljiv svim
            registriranim poslodavcima). Tako da slobodno se opusti i istražuj
            oglase, bez brige da će te netko nepoželjan pronaći."
        />
        <Pitanje
          title='6. Kako saznati jesam li "match" na oglasu na koji sam se
              prijavio?'
          description=' Kada se pronađeš kao "match" na oglasu, oglasi će biti označeni kao
            takvi, a imat ćeš mogućnost direktnog chata s poslodavcem. To je
            jednostavan način da znaš da si pronađen kao odgovarajući kandidat.'
        />
        <Pitanje
          title="7. Kad mogu pitati poslodavca što me zanima?"
          description='Možeš postaviti pitanja poslodavcu kad god želiš! Naša platforma
            omogućuje direktnu komunikaciju putem chata s poslodavcem. Tako da,
            čim se pronađeš kao "match" na oglasu, možeš odmah započeti razgovor
            i postaviti sva pitanja koja te zanimaju. Fleksibilnost je na tvojoj
            strani!'
        />
        <Pitanje
          title='8. Koliko dugo imam mogućnost pokretanja chata nakon što ostvarim
              "match" s poslodavcem?'
          description='Razumijemo tvoju važnost u donošenju odluka. Kada ostvariš "match" s
            poslodavcem, imaš 7 dana da odlučiš želiš li pokrenuti chat s njim.
            Nakon tog perioda, opcija chata više neće biti dostupna.'
        />
      </div>
    </section>
  );
};

export default PosloprimciPitanja;
