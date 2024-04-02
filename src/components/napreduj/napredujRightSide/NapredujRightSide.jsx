import React from "react";
import NapredujCard from "./napredujCard/NapredujCard";

const NapredujRightSide = ({ index, setIndex }) => {
  return (
    <div className="slider-right">
      {index == 0 ? (
        <>
          <div onClick={() => setIndex(0)}>
            <NapredujCard
              title="Tvoj profil postaje"
              titleSecondRow="tvoj životopis."
              description="Zaboravi na pive za frenda dizajnera i klasične Word ili Canva
                templatee. Naša platforma će ti pomoći da jednostavno ispunjen profil
                postane tvoj izvanredan životopis. Posebno smo se potrudili da bude
                atraktivan i primamljiv."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon1-4.png"
              imageAlt="slika ikone koja prikazuje tvoj dokument"
              isActive={true}
            />
          </div>
          <div onClick={() => setIndex(1)}>
            <NapredujCard
              title="Nitko ne treba znati"
              titleSecondRow="da tražiš posao."
              description="Bilo da samo razgledavaš oglase ili aktivno razmišljaš o bijegu od
                  trenutnog posla, ti imaš kontrolu nad vidljivošću svog profila. Mi
                  cijenimo tvoju privatnost i nitko neće saznati da koristiš
                  Zaposlise, ako ti to ne želiš."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon2-4.png"
              imageAlt="slika ikone koja prikazuje kako nitko neće znati da ti tražiš posao"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(2)}>
            <NapredujCard
              title="Prijavi se ili preskoči"
              titleSecondRow="oglas u sekundi."
              description="Samo jedan pokret kažiprsta je dovoljan da poslodavcu pokažeš svoj
                  interes. Ako si tip osobe koja voli dugo razmišljati, jednostavno
                  preskoči oglas. Mi ćemo ga označiti za tebe, u slučaju da se
                  predomisliš. Tvoj izbor, tvoja sloboda."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon3-4.png"
              imageAlt="slika ikone koja prikazuje da se možeš prijaviti na oglas ili ga preskočiti"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(3)}>
            <NapredujCard
              title="Pitaj što te zanima i prije "
              titleSecondRow="razgovora za posao."
              description="Poslodavac te je odabrao kao idealnog kandidata? Sjajno! Sada možeš
                  aktivirati direktan chat i postavljati dodatna pitanja, bez brige o
                  formalnostima prvog službenog razgovora za posao. Iskoristi priliku
                  za neformalnu i otvorenu komunikaciju."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon4-2.png"
              imageAlt="slika ikone koja prikazuje da možeš saznati sve što te zanima prije razgovora za posao"
              isActive={false}
            />
          </div>
        </>
      ) : null}
      {index == 1 ? (
        <>
          <div onClick={() => setIndex(0)}>
            <NapredujCard
              title="Tvoj profil postaje"
              titleSecondRow="tvoj životopis."
              description="Zaboravi na pive za frenda dizajnera i klasične Word ili Canva
                templatee. Naša platforma će ti pomoći da jednostavno ispunjen profil
                postane tvoj izvanredan životopis. Posebno smo se potrudili da bude
                atraktivan i primamljiv."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon1-4.png"
              imageAlt="slika ikone koja prikazuje tvoj dokument"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(1)}>
            <NapredujCard
              title="Nitko ne treba znati"
              titleSecondRow="da tražiš posao."
              description="Bilo da samo razgledavaš oglase ili aktivno razmišljaš o bijegu od
                  trenutnog posla, ti imaš kontrolu nad vidljivošću svog profila. Mi
                  cijenimo tvoju privatnost i nitko neće saznati da koristiš
                  Zaposlise, ako ti to ne želiš."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon2-4.png"
              imageAlt="slika ikone koja prikazuje kako nitko neće znati da ti tražiš posao"
              isActive={true}
            />
          </div>
          <div onClick={() => setIndex(2)}>
            <NapredujCard
              title="Prijavi se ili preskoči"
              titleSecondRow="oglas u sekundi."
              description="Samo jedan pokret kažiprsta je dovoljan da poslodavcu pokažeš svoj
                  interes. Ako si tip osobe koja voli dugo razmišljati, jednostavno
                  preskoči oglas. Mi ćemo ga označiti za tebe, u slučaju da se
                  predomisliš. Tvoj izbor, tvoja sloboda."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon3-4.png"
              imageAlt="slika ikone koja prikazuje da se možeš prijaviti na oglas ili ga preskočiti"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(3)}>
            <NapredujCard
              title="Pitaj što te zanima i prije "
              titleSecondRow="razgovora za posao."
              description="Poslodavac te je odabrao kao idealnog kandidata? Sjajno! Sada možeš
                  aktivirati direktan chat i postavljati dodatna pitanja, bez brige o
                  formalnostima prvog službenog razgovora za posao. Iskoristi priliku
                  za neformalnu i otvorenu komunikaciju."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon4-2.png"
              imageAlt="slika ikone koja prikazuje da možeš saznati sve što te zanima prije razgovora za posao"
              isActive={false}
            />
          </div>
        </>
      ) : null}
      {index == 2 ? (
        <>
          <div onClick={() => setIndex(0)}>
            <NapredujCard
              title="Tvoj profil postaje"
              titleSecondRow="tvoj životopis."
              description="Zaboravi na pive za frenda dizajnera i klasične Word ili Canva
                templatee. Naša platforma će ti pomoći da jednostavno ispunjen profil
                postane tvoj izvanredan životopis. Posebno smo se potrudili da bude
                atraktivan i primamljiv."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon1-4.png"
              imageAlt="slika ikone koja prikazuje tvoj dokument"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(1)}>
            <NapredujCard
              title="Nitko ne treba znati"
              titleSecondRow="da tražiš posao."
              description="Bilo da samo razgledavaš oglase ili aktivno razmišljaš o bijegu od
                  trenutnog posla, ti imaš kontrolu nad vidljivošću svog profila. Mi
                  cijenimo tvoju privatnost i nitko neće saznati da koristiš
                  Zaposlise, ako ti to ne želiš."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon2-4.png"
              imageAlt="slika ikone koja prikazuje kako nitko neće znati da ti tražiš posao"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(2)}>
            <NapredujCard
              title="Prijavi se ili preskoči"
              titleSecondRow="oglas u sekundi."
              description="Samo jedan pokret kažiprsta je dovoljan da poslodavcu pokažeš svoj
                  interes. Ako si tip osobe koja voli dugo razmišljati, jednostavno
                  preskoči oglas. Mi ćemo ga označiti za tebe, u slučaju da se
                  predomisliš. Tvoj izbor, tvoja sloboda."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon3-4.png"
              imageAlt="slika ikone koja prikazuje da se možeš prijaviti na oglas ili ga preskočiti"
              isActive={true}
            />
          </div>
          <div onClick={() => setIndex(3)}>
            <NapredujCard
              title="Pitaj što te zanima i prije "
              titleSecondRow="razgovora za posao."
              description="Poslodavac te je odabrao kao idealnog kandidata? Sjajno! Sada možeš
                  aktivirati direktan chat i postavljati dodatna pitanja, bez brige o
                  formalnostima prvog službenog razgovora za posao. Iskoristi priliku
                  za neformalnu i otvorenu komunikaciju."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon4-2.png"
              imageAlt="slika ikone koja prikazuje da možeš saznati sve što te zanima prije razgovora za posao"
              isActive={false}
            />
          </div>
        </>
      ) : null}
      {index == 3 ? (
        <>
          <div onClick={() => setIndex(0)}>
            <NapredujCard
              title="Tvoj profil postaje"
              titleSecondRow="tvoj životopis."
              description="Zaboravi na pive za frenda dizajnera i klasične Word ili Canva
                templatee. Naša platforma će ti pomoći da jednostavno ispunjen profil
                postane tvoj izvanredan životopis. Posebno smo se potrudili da bude
                atraktivan i primamljiv."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon1-4.png"
              imageAlt="slika ikone koja prikazuje tvoj dokument"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(1)}>
            <NapredujCard
              title="Nitko ne treba znati"
              titleSecondRow="da tražiš posao."
              description="Bilo da samo razgledavaš oglase ili aktivno razmišljaš o bijegu od
                  trenutnog posla, ti imaš kontrolu nad vidljivošću svog profila. Mi
                  cijenimo tvoju privatnost i nitko neće saznati da koristiš
                  Zaposlise, ako ti to ne želiš."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon2-4.png"
              imageAlt="slika ikone koja prikazuje kako nitko neće znati da ti tražiš posao"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(2)}>
            <NapredujCard
              title="Prijavi se ili preskoči"
              titleSecondRow="oglas u sekundi."
              description="Samo jedan pokret kažiprsta je dovoljan da poslodavcu pokažeš svoj
                  interes. Ako si tip osobe koja voli dugo razmišljati, jednostavno
                  preskoči oglas. Mi ćemo ga označiti za tebe, u slučaju da se
                  predomisliš. Tvoj izbor, tvoja sloboda."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon3-4.png"
              imageAlt="slika ikone koja prikazuje da se možeš prijaviti na oglas ili ga preskočiti"
              isActive={false}
            />
          </div>
          <div onClick={() => setIndex(3)}>
            <NapredujCard
              title="Pitaj što te zanima i prije "
              titleSecondRow="razgovora za posao."
              description="Poslodavac te je odabrao kao idealnog kandidata? Sjajno! Sada možeš
                  aktivirati direktan chat i postavljati dodatna pitanja, bez brige o
                  formalnostima prvog službenog razgovora za posao. Iskoristi priliku
                  za neformalnu i otvorenu komunikaciju."
              imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/icon4-2.png"
              imageAlt="slika ikone koja prikazuje da možeš saznati sve što te zanima prije razgovora za posao"
              isActive={true}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default NapredujRightSide;
