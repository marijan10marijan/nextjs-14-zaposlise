import Blog from "@/components/blog/Blog";
import Kandidati from "@/components/kandidati/Kandidati";
import Main from "@/components/main/Main";
import Odabir from "@/components/odabir/Odabir";
import Oglašivači from "@/components/oglašivači/Oglašivači";
import Pitanja from "@/components/pitanja/Pitanja";
import Proces from "@/components/proces/Proces";

export const metadata = {
  title: "Poslodavci - Zaposlise.hr",
  description: "Zaposlise poslodavci stranica.",
};

export default function Home() {
  return (
    <>
      <Main />
      <Proces />
      <Kandidati />
      <Odabir />
      <Oglašivači />
      <Blog />
      <Pitanja />
    </>
  );
}
