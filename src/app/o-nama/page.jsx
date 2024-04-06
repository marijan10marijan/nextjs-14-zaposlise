import KontaktMain from "@/components/kontakt/KontaktMain";
import ONamaHeader from "@/components/oNama/ONamaHeader";
import ONamaMap from "@/components/oNama/ONamaMap";
import ONamaPrica from "@/components/oNama/ONamaPrica";
import React from "react";

export const metadata = {
  title: "O nama - Zaposlise.hr",
  description: "About Us",
};

const ONama = () => {
  return (
    <>
      <ONamaHeader />
      <ONamaPrica />
      <KontaktMain
        title={"Nisi uspio pronaći informaciju na našoj stranici?"}
        subtitle={"Kontaktiraj nas i postavi dodatna pitanja."}
      />
      <ONamaMap />
    </>
  );
};

export default ONama;
