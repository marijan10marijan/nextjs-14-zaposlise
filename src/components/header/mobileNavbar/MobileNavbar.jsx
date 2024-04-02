import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = ({ isActive, handleLinks }) => {
  const pathName = usePathname();
  return (
    <ul className={isActive ? "mobile-links show" : "mobile-links"}>
      <li>
        <Link onClick={handleLinks} href="https://zaposlise.hr/">
          Naslovna
        </Link>
      </li>
      <li>
        <Link
          className={pathName == "/poslodavci" ? "link-active" : ""}
          onClick={handleLinks}
          href="/poslodavci"
        >
          Poslodavci
        </Link>
      </li>
      <li>
        <Link
          onClick={handleLinks}
          className={pathName == "/posloprimci" ? "link-active" : ""}
          href="/posloprimci"
        >
          Posloprimci
        </Link>
      </li>
      <li>
        <Link onClick={handleLinks} href="https://zaposlise.hr/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link
          onClick={handleLinks}
          href="https://zaposlise.hr/kalkulator-place/bruto-u-neto"
        >
          Kalkulator Plaće
        </Link>
      </li>
      <li>
        <Link onClick={handleLinks} href="https://posao.zaposlise.hr/">
          Oglasi
        </Link>
      </li>
      <li>
        <Link
          onClick={handleLinks}
          className="login"
          href="https://posao.zaposlise.hr/signin"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          onClick={handleLinks}
          className="register"
          href="https://posao.zaposlise.hr/signin/create"
        >
          Registriraj se
        </Link>
      </li>
    </ul>
  );
};

export default MobileNavbar;
