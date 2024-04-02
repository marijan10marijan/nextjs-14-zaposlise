import KontaktHeader from "@/components/kontaktComponents/KontaktHeader";
import KontaktMain from "@/components/kontaktComponents/KontaktMain";
import KontaktMap from "@/components/kontaktComponents/KontaktMap";
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
      <KontaktMap/>
    </>
  );
};

export default Kontakt;
