import React from "react";
import ProcesCard from "./procesCard/ProcesCard";

const ProcesLeftSide = ({ index, setIndex }) => {
  return (
    <div className="proces-left">
      <div className="proces-left-wrapper">
        {index == 0 ? (
          <>
            <div onClick={() => setIndex(0)}>
              <ProcesCard
                title="Ispuni profil tvrtke i objavi tekstualni ili video oglas"
                description="Ispuni profil tvrtke, dodaj fotografije i pogodnosti za nove
              zaposlenike. Popuni oglase za otvorena radna mjesta i dodaj
              kriterije za nove zaposlenike. Ako si motiviran za dodatan korak u
              prezentaciji tvrtke, objavi video oglas. Ne brini, sve je brzo i
              jednostavno."
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon2.png"
                imageAlt="ikona"
                isActive={true}
              />
            </div>
            <div onClick={() => setIndex(1)}>
              <ProcesCard
                title="Pregledaj prijavljene ili pretraži nove kandidate"
                description="Pretraži bazu kandidata koji najbolje odgovaraju tvojoj
                      tvrtci i pozovi ih da pogledaju tvoj oglas. Pregledaj
                      životopise ili video prijave samoprijavljenih kandidata i
                      jednim potezom prsta prihvati ili odbij prijave. Jer, zašto
                      posao ne bi bio zabavan?"
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon3.png"
                imageAlt="ikona"
                isActive={false}
              />
            </div>
            <div onClick={() => setIndex(2)}>
              <ProcesCard
                title=" Izravno komuniciraj i organizirano arhiviraj najbolje
                    kandidate"
                description=" Kada odabereš svoje favorite, iskoristi opciju live chata za
                      postavljanje dodatnih pitanja i dogovaranje daljnjih koraka.
                      Preskoči detektivski posao i pretragu prijava po inboxu tvog
                      maila. Sve prijave su uredno arhivirane na lako dostupnom
                      mjestu."
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon4.png"
                imageAlt="ikona"
                isActive={false}
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="proces-left-wrapper">
        {index == 1 ? (
          <>
            <div onClick={() => setIndex(0)}>
              <ProcesCard
                title="Ispuni profil tvrtke i objavi tekstualni ili video oglas"
                description="Ispuni profil tvrtke, dodaj fotografije i pogodnosti za nove
              zaposlenike. Popuni oglase za otvorena radna mjesta i dodaj
              kriterije za nove zaposlenike. Ako si motiviran za dodatan korak u
              prezentaciji tvrtke, objavi video oglas. Ne brini, sve je brzo i
              jednostavno."
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon2.png"
                imageAlt="ikona"
                isActive={false}
              />
            </div>
            <div onClick={() => setIndex(1)}>
              <ProcesCard
                title="Pregledaj prijavljene ili pretraži nove kandidate"
                description="Pretraži bazu kandidata koji najbolje odgovaraju tvojoj
                      tvrtci i pozovi ih da pogledaju tvoj oglas. Pregledaj
                      životopise ili video prijave samoprijavljenih kandidata i
                      jednim potezom prsta prihvati ili odbij prijave. Jer, zašto
                      posao ne bi bio zabavan?"
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon3.png"
                imageAlt="ikona"
                isActive={true}
              />
            </div>
            <div onClick={() => setIndex(2)}>
              <ProcesCard
                title=" Izravno komuniciraj i organizirano arhiviraj najbolje
                    kandidate"
                description=" Kada odabereš svoje favorite, iskoristi opciju live chata za
                      postavljanje dodatnih pitanja i dogovaranje daljnjih koraka.
                      Preskoči detektivski posao i pretragu prijava po inboxu tvog
                      maila. Sve prijave su uredno arhivirane na lako dostupnom
                      mjestu."
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon4.png"
                imageAlt="ikona"
                isActive={false}
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="proces-left-wrapper">
        {index == 2 ? (
          <>
            <div onClick={() => setIndex(0)}>
              <ProcesCard
                title="Ispuni profil tvrtke i objavi tekstualni ili video oglas"
                description="Ispuni profil tvrtke, dodaj fotografije i pogodnosti za nove
              zaposlenike. Popuni oglase za otvorena radna mjesta i dodaj
              kriterije za nove zaposlenike. Ako si motiviran za dodatan korak u
              prezentaciji tvrtke, objavi video oglas. Ne brini, sve je brzo i
              jednostavno."
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon2.png"
                imageAlt="ikona"
                isActive={false}
              />
            </div>
            <div onClick={() => setIndex(1)}>
              <ProcesCard
                title="Pregledaj prijavljene ili pretraži nove kandidate"
                description="Pretraži bazu kandidata koji najbolje odgovaraju tvojoj
                      tvrtci i pozovi ih da pogledaju tvoj oglas. Pregledaj
                      životopise ili video prijave samoprijavljenih kandidata i
                      jednim potezom prsta prihvati ili odbij prijave. Jer, zašto
                      posao ne bi bio zabavan?"
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon3.png"
                imageAlt="ikona"
                isActive={false}
              />
            </div>
            <div onClick={() => setIndex(2)}>
              <ProcesCard
                title=" Izravno komuniciraj i organizirano arhiviraj najbolje
                    kandidate"
                description=" Kada odabereš svoje favorite, iskoristi opciju live chata za
                      postavljanje dodatnih pitanja i dogovaranje daljnjih koraka.
                      Preskoči detektivski posao i pretragu prijava po inboxu tvog
                      maila. Sve prijave su uredno arhivirane na lako dostupnom
                      mjestu."
                imageSrc="https://zaposlise.hr/wp-content/uploads/2021/11/slider-icon4.png"
                imageAlt="ikona"
                isActive={true}
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProcesLeftSide;
