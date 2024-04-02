import BannerImage from "@/components/bannerImage/BannerImage";
import Blog from "@/components/blog/Blog";
import Napreduj from "@/components/napreduj/Napreduj";
import PosloprimciPitanja from "@/components/posloprimciPitanja/PosloprimciPitanja";
import PotraziOglas from "@/components/potraziOglas/PotraziOglas";
import PronadiPosao from "@/components/pronadiPosao/PronadiPosao";
import React from "react";

export const metadata = {
  title: "Posloprimci - Zaposlise.hr",
  description: "Zaposlise posloprimci stranica.",
};

const Posloprimci = () => {
  return (
    <>
      <PotraziOglas />
      <Napreduj />
      <PronadiPosao />
      <BannerImage />
      <Blog blogPage='posloprimci'/>
      <PosloprimciPitanja />
    </>
  );
};

export default Posloprimci;
