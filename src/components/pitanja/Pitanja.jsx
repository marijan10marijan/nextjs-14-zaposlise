import React from "react";
import Pitanje from "./pitanje/Pitanje";

const Pitanja = () => {
  return (
    <section className="pitanja-full">
      <div className="pitanja-decoration__img"></div>
      <div className="pitanja">
        <h4 className="pitanja-naslov">Često postavljana pitanja</h4>
        <Pitanje
          title="1. Što je točno platforma Zaposlise?"
          description="Zaposlise je moderna web i mobilna aplikacija koja omogućava jednostavno
        povezivanje poslodavaca i budućih talenata. Naša platforma promiče
        transparentno i otvoreno komuniciranje uvjeta i pogodnosti te pruža
        mogućnost pronalaska idealnih zaposlenika putem unaprijed definiranih
        kriterija. Vjerujemo u olakšavanje procesa zapošljavanja i stvaranje
        kvalitetnih radnih spojeva."
        />
        <Pitanje
          title="2. Zašto odabrati Zaposlise umjesto tradicionalnih metoda
              pronalaska talenata?"
          description="Pa, mi nismo baš kao ostale platforme. Nismo tu da te nagovaramo,
            već da ti ponudimo alternativu koja je moderna, jednostavna i
            zabavna. Uz nas štediš vrijeme i izbjegavaš nesporazume, a nećeš se
            morati brinuti ni o visokim troškovima. Možda smo tvoj savršeni
            match, ali jedini način da saznamo je da isprobamo."
        />
        <Pitanje
          title="3. Kako napraviti račun na Zaposlise?"
          description="Ovo je jednostavan proces koji obaviš samo jednom i zauvijek
            zaboraviš. Klikni na link za otvaranje računa i registriraj se
            e-mailom tvrtke. Nakon toga, popuni sve detalje o tvrtci i spremni
            ste za oglašavanje. Kod nas nema skrivenih troškova, sitnih slova
            niti dodatnih uvjeta. Sve je transparentno i jednostavno, baš onako
            kako treba biti."
        />
        <Pitanje
          title="4. Kako mogu provjeriti koji zaposlenici iz moje tvrtke koriste
              Zaposlise aplikaciju?"
          description="Vraže jedan mali, nisi prvi se to pitao. Moramo ti reći da je odluka
            isključivo u rukama samog korisnika. Ako su odabrali opciju
            vidljivog životopisa, bit će ti dostupni kao korisnici. Stvarno se
            trudimo zaštititi privatnost naših korisnika."
        />
        <Pitanje
          title="5. Koliko recruitera se može koristiti jednim tvrtkinim računom na
              Zaposlise?"
          description="Na Zaposlise, jednim tvrtkinim računom može se koristiti neograničen
            broj recruitera. Nema ograničenja koliko ljudi u tvrtki može
            koristiti našu platformu za pronalaženje talenata. Tako možete
            omogućiti pristup svim relevantnim osobama u vašem timu kako bi
            zajedno pronašli najbolje kandidate za vaše otvorene pozicije."
        />
        <Pitanje
          title="6. Mogu li kroz tvrtkin račun pristupiti oglasima drugih
              oglašivača?"
          description="Kao poslodavac, imate mogućnost pregleda oglasa drugih poslodavaca
            na Zaposlise aplikaciji. To vam omogućuje uvid u raznolike ponude na
            tržištu rada. Vaša ovlast je ograničena na pregled oglasa, dok
            nemate mogućnost prijava ili bilo kakvih operativnih radnji vezanih
            uz tuđe oglase. Tako se možete informirati i inspirirati, ali vaše
            aktivnosti su usredotočene na upravljanje vlastitim oglasima i
            komunikaciju s kandidatima koji su se prijavili na vaše oglase."
        />
        <Pitanje
          title=" 7. Kako pozvati kandidate koji se nisu sami prijavili na oglas?"
          description='Iskoristi prednost besplatne opcije i pozovi talente koji se nisu
            sami prijavili na oglas. Objavi oglas, koristi gumb "Pozovi" i
            pretražuj i druge kandidate. Ako kandidat odgovori na tvoj poziv,
            odmah možete započeti razgovor putem chata.'
        />
        <Pitanje
          title="8. Moram li pamtiti koje sam kandidate preskočio jer nisam bio
              siguran?"
          description="Ne brini se, mi smo se pobrinuli za to. Na Zaposlise aplikaciji
            možeš jednostavno pregledati sve kandidate koje si preskočio ili s
            kojima nisi bio siguran. Imamo zgodnu funkcionalnost koja ti
            omogućuje da lako pristupiš arhivi prijava i pregledaš ih kad god
            poželiš. Nećeš više morati pamtiti ili tražiti bilješke jer je sve
            organizirano na jednom mjestu."
        />
        <Pitanje
          title="9. Mogu li prijavljeni kandidati vidjeti da su odbijeni?"
          description="U Zaposlise aplikaciji nije obavezno pružiti povratnu informaciju
            kandidatima koji nisu ušli u uži krug. Iako nije obavezna, nudimo
            opciju automatskog slanja obavijesti kandidatima koji nisu ušli u
            uži krug. Iako to može biti izazovno, mi ćemo se pobrinuti da im
            pružimo utjehu u obliku mnogih novih oglasa koje mogu istražiti i
            svajpati. Na taj način im pružamo priliku da pronađu druge
            zanimljive mogućnosti za sebe."
        />
        <Pitanje
          title="10. Mogu li poslati poruku kandidatu prije nego što smo se
              spojili?"
          description='Potpuno te razumijemo. U Zaposlise aplikaciji cijenimo autonomiju
            kandidata i želimo im omogućiti kontrolu nad svojim kontaktom s
            poslodavcima. Stoga, opcija direktne komunikacije je moguća samo
            kada se poslodavac i posloprimac međusobno potvrde kao "match". Na
            taj način osiguravamo da je kontakt ostvaren samo s onima koji su
            izrazili zajednički interes za daljnjom komunikacijom.'
        />
        <Pitanje
          title=" 11. Koliko vremena imam za poslati poruku kandidatu nakon isteka
              oglasa?"
          description="Nakon isteka oglasa, nema ograničenog vremenskog roka za slanje
            poruke kandidatu. Možeš komunicirati s kandidatima kad god želiš i
            kad god je to prikladno za tebe. U Zaposlise aplikaciji, cijenimo
            fleksibilnost i omogućavamo ti da uspostaviš kontakt s kandidatima u
            skladu sa svojim rasporedom i potrebama."
        />
      </div>
    </section>
  );
};

export default Pitanja;
