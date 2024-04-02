import KontaktMain from "@/components/kontaktComponents/KontaktMain";
import ONamaMap from "@/components/oNama/ONamaMap";
import React from "react";

export const metadata = {
  title: "O nama - Zaposlise.hr",
  description: "About Us",
};

const ONama = () => {
  return (
    <>
      <KontaktMain
        title={"Nisi uspio pronaći informaciju na našoj stranici?"}
        subtitle={"Kontaktiraj nas i postavi dodatna pitanja."}
      />
      <ONamaMap />
    </>
  );
};

export default ONama;
