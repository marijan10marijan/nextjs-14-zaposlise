import KontaktHeader from "@/components/kontakt/KontaktHeader";
import KontaktMain from "@/components/kontakt/KontaktMain";
import KontaktMap from "@/components/kontakt/KontaktMap";
import React from "react";

export const metadata = {
  title: "Kontakt - Zaposlise.hr",
  description: "About Us",
};

const Kontakt = () => { 
  return (
    <>
      <KontaktHeader />
      <KontaktMain
        title={"Niste uspjeli pronaći informaciju na našoj stranici?"}
        subtitle={"Kontaktirajte nas radi svih dodatnih pitanja."}
      />
      <KontaktMap />
    </>
  );
};

export default Kontakt;
