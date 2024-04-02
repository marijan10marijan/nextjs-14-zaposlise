import React from "react";
import styles from "./uvjetiKorištenja.module.css";
import Link from "next/link";

const UvjetiKorištenja = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.uvjetiTitle}>Uvjeti korištenja</h3>
        <p className={styles.uvjetiDesc}>
          Ovim web stranicama upravlja ICT-insisto d.o.o., Gornjostupnička 27 b,
          Gornji Stupnik 10255, OIB: 56015368968, koje je uspostavilo pravila i
          uvjete korištenja web stranice Zaposlise.hr (uključujući i pripadajuću
          aplikaciju za mobilne uređaje).
        </p>
        <p className={styles.uvjetiDesc}>
          Na svim mjestima na ovim web stranicama i mobilnim aplikacijama,
          termini “mi”, “nas” , “naš” i „Društvo“ odnose se na ICT-insisto
          d.o.o.ICT-insisto d.o.o. nudi ove web stranice i mobilne aplikacije,
          uključujući sve informacije, alate i usluge koje su Vama kao korisniku
          dostupne putem ovih web stranica i mobilnih aplikacija, pod uvjetom da
          prihvatite sve odredbe, uvjete, pravila i obavijesti koje su ovdje
          sadržane.
        </p>
        <p className={styles.uvjetiDesc}>
          Posjećujući naše web stranice i mobilne aplikacije suglasni ste biti
          vezani sljedećim odredbama i uvjetima uključujući one dodatne odredbe
          i uvjete i pravila na koja se ovdje pozivamo i/ili su dostupni putem
          hiperlinka. Ovi opći uvjeti korištenja Usluga primjenjuju se bez
          razlike na sve korisnike web stranica i mobilne aplikacije.
        </p>
        <p className={styles.uvjetiDesc}>
          Molimo Vas da pažljivo pročitate ove Opće uvjete korištenja Usluga
          prije pristupanja našim web stranicama ili korištenja istih.
          Pristupajući ili koristeći bilo koji dio internetskih stranica,
          suglasni ste ispunjavati obveze koje proizlaze iz ovih Općih uvjeta
          korištenja Usluga. Ako niste suglasni sa svim ovim odredbama i
          uvjetima sadržanima u ovom ugovoru, tada ne smijete pristupati ovim
          web stranicama ili aplikacijama niti koristiti bilo koje usluge na
          istima. Ako se ovi Opći uvjeti korištenja Usluga smatraju ponudom,
          prihvat se isključivo ograničava na prihvat ovih Općih uvjeta
          korištenja Usluga.
        </p>
        <p className={styles.uvjetiDesc}>
          Bilo koji novi sadržaji ili alati koji se dodaju već postojećim web
          stranicama također su podložni primjeni ovih istih Općih uvjeta
          korištenja Usluga. Možete pogledati najnoviju verziju ovih Općih
          uvjeta korištenja Usluge u bilo koje doba na ovim stranicama.
          Pridržavamo pravo ažurirati, promijeniti ili zamijeniti bilo koji dio
          ovih Općih uvjeta korištenja Usluga objavljujući ažuriranja i/ili
          promjene na našim web stranicama i mobilnim aplikacijama. Vaša je
          odgovornost provjeriti s vremena na vrijeme ima li promjena na ovim
          web stranicama i mobilnim aplikacijama. Vaše kontinuirano korištenje
          ili pristupanje našim web stranicama i mobilnim aplikacijama nakon
          objave bilo kojih promjena predstavlja prihvat tih promjena.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>
            1. OPĆI UVJETI KORIŠTENJA NAŠIH WEB I MOBILNIH APLIKACIJA
          </strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Svojim pristankom biti obvezan ovim Općim uvjetima korištenja Usluga,
          Vi izjavljujete da ste Vi sami barem punoljetni prema propisima Vaše
          države ili pokrajine gdje imate prebivalište, odnosno da Vi sami jeste
          punoljetni prema propisima Vaše države ili regije gdje imate
          prebivalište i da nam time ujedno dajete Vaš pristanak dozvoliti bilo
          kojim Vašim uzdržavanim osobama da koriste naše web i mobilne
          aplikacije.
        </p>
        <p className={styles.uvjetiDesc}>
          Ne smijete koristiti naše proizvode za bilo kakve nezakonite ili
          neovlaštene svrhe niti Vi smijete, prilikom korištenja naših Usluga,
          prekršiti bilo koje zakone iz jurisdikcije kojoj pripadate
          (uključujući, između ostaloga, propise o autorskim pravima).
        </p>
        <p className={styles.uvjetiDesc}>
          Ne smijete prenositi bilo kakve štetne kompjuterske programe (crve,
          viruse ili bilo koji drugi kôd destruktivne naravi). Kršenje ili
          povreda bilo kojih odredbi iz ovih Uvjeta dovodi do trenutačnog
          prestanka našeg pružanja Usluga.
        </p>
        <p className={styles.uvjetiDesc}>
          Mi pridržavamo pravo u bilo koje doba odbiti pružiti uslugu bilo kome
          iz bilo kojeg zamislivog razloga. Vi razumijete da se Vaš sadržaj
          (izuzev podataka o Vašoj kreditnoj kartici) može prenositi bez
          enkripcije i da može uključivati (a) prijenos putem različitih mreža;
          i (b) promjene kako bi bio sukladan i prilagodio se tehničkim
          zahtjevima spajanja na naše mreže ili uređaje. Podaci o Vašoj
          kreditnoj kartici su kriptirani tijekom prijenosa preko mreža.
        </p>
        <p className={styles.uvjetiDesc}>
          Korištenje web i mobilne aplikacije moguće je samo i isključivo uz
          pristanak na Uvjete korištenja te ukoliko iste ne prihvaćate, nije Vam
          dozvoljeno korištenje web i mobilne aplikacije.
        </p>
        <p className={styles.uvjetiDesc}>
          Korisnik je isključivo odgovoran za snošenje bilo kojeg troška koji
          može nastati korištenjem ove web i mobilne aplikacije.
        </p>
        <p className={styles.uvjetiDesc}>
          Naslovi odlomaka koji se koriste u ovom Ugovoru služe samo radi lakšeg
          snalaženja i sami po sebi ne ograničavaju ove Uvjete niti na drugi
          način na njih utječu.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>2. POSLOPRIMCI</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Web stranica i mobilna aplikacija omogućuje posloprimcima besplatnu
          objavu životopisa i pretraživanje objavljenih oglasa poslodavaca uz
          prethodnu registraciju. Posloprimac je u cijelosti odgovoran za
          sadržaj životopisa te za potpune i točne informacije koje je objavio
          našim web i mobilnim aplikacijama.
        </p>
        <p className={styles.uvjetiDesc}>
          U svrhu korištenja naših web i mobilnih aplikacija, posloprimac je
          dužan registrirati svoj korisnički račun. Posloprimac snosi isključivu
          odgovornost za tajnost svoje lozinke i korištenje naših web i mobilnih
          aplikacija. Posloprimac nas može obavijestiti ako sumnja na
          neovlašteno korištenje svojih pristupnih podataka.
        </p>
        <p className={styles.uvjetiDesc}>
          Posloprimac se obvezuje koristiti svoj korisnički račun na našim web i
          mobilnim aplikacija isključivo u svrhu traženja i informiranja o
          radnim mjestima. Ako posloprimac koristi svoj korisnički račun u druge
          svrhe poput promocije, prodaje proizvoda ili usluga i slične
          zlouporabe korisničkog računa, mi ćemo ih ukloniti sa svojih web i
          mobilnih aplikacija. Svaka takva zlouporaba korisničkog računa
          podliježe i zakonskim propisima o pokretanju postupaka radi naknade
          štete Društvu.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>3. POSLODAVCI</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Poslodavac je obvezan se registrirati i koristiti svoj korisnički
          račun po pravilima ovog Uvjeta korištenja.
        </p>
        <p className={styles.uvjetiDesc}>
          Poslodavac se obvezuje da će usluge web i mobilne aplikacije Društva
          koristiti jedino u svrhu pronalaženja posloprimaca za svoje potrebe
          bez zlouporabe baze podataka web i mobilne aplikacije Društva.
        </p>
        <p className={styles.uvjetiDesc}>
          Zlouporaba baze podataka podrazumijeva dijeljenja ili
          zloupotrebljavanja baze podataka (bilo kakvih informacija o
          posloprimcima) na bilo koje kanale medija. U slučaju zloupotrebe baze
          podataka, poslodavac odgovara za cjelokupnu štetu Društvu i trećim
          osobama. Poslodavac se obavezuje da neće dopuštati uvid u podatke,
          bilo direktno ili davanjem na upotrebu svog korisničkog imena i
          lozinke, trećim osobama.
        </p>
        <p className={styles.uvjetiDesc}>
          Poslodavcima je nedozvoljeno u oglasima navoditi uvjete koji su
          zabranjeni propisima i/ili se smatraju diskriminatornima po bilo kojoj
          osnovi. Poslodavac je odgovoran za točnost i potpunost sadržaja oglasa
          za radno mjesto i ostalih informacija koje je naveo na web i mobilnoj
          aplikaciji Društva. Poslodavac samostalno određuje sadržaj oglasa te
          snosi isključivu odgovornost i pravne posljedice koje proizlaze iz
          objavljivanja oglasa na web i mobilnoj aplikaciji.
        </p>
        <p className={styles.uvjetiDesc}>
          Poslodavac garantira da je on vlasnik svih autorskih prava svog
          cjelokupnog sadržaja kojeg objavljuje na web i mobilnoj aplikaciji
          Društva. Postavljanjem objave na web i mobilnu aplikaciju Društva,
          poslodavac bezuvjetno i neopozivo daje svoj pristanak Društvu da
          njegovu objavu promovira, oglašavanjem ili na drugi način prema ocjeni
          Društva.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>4. SADRŽAJ OGLASA</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Zabranjeno je svako zavaravajuće oglašavanje, odnosno oglašavanje koje
          na bilo koji način dovodi u zabludu ili je vjerojatno da će dovesti u
          zabludu osobe kojima je upućeno ili do kojih dopire pa je vjerojatno
          da će zbog toga utjecati na njihovo ekonomsko ponašanje, odnosno da
          zbog toga povređuje ili je vjerojatno da će povrijediti konkurente.
          Zabranjena je objava oglasa neregistriranih djelatnosti to jest onih
          djelatnosti koja nisu upisana u sudski registar ili drugi odgovarajući
          registar ili nije prijavljeno nadležnim tijelima kada je to predviđeno
          propisima.
        </p>
        <p className={styles.uvjetiDesc}>
          Društvo u svakom trenutku ima pravo izmjene izgleda oglasa (izgled
          teksta, fotografija, video sadržaja i ostalog što čini oglas), pravo
          na mijenjanje pozicije oglasa kao i pravo na ne objavu ili uklanjanje
          oglasa, i to u slučaju kada objava oglasa nije u skladu s Uvjetima
          korištenja ili primjenjivim propisima.
        </p>
        <p className={styles.uvjetiDesc}>
          Društvo zadržava pravo prema svojoj procjeni ne objaviti ili ukloniti
          bilo koji sadržaj korisnika web i mobilne aplikacije koji je
          diskriminatoran na bilo kojoj osnovi, prekršajno i/ili kazneno djelo,
          osnova je za nastanak štete Društvu, ostalim korisnicima ili je na
          bilo koji način nezakonit po načelima Uvjeta korištenja.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>5. TOČNOST, POTPUNOST I BEZVREMENOST INFORMACIJA</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Mi ne odgovaramo za točnost, potpunost niti ažurnost informacija
          učinjenih dostupnima na ovoj web i mobilnoj aplikaciji. Materijal na
          ovim web i mobilnim aplikacijama pruža se samo kao opća informacija i
          na njega se ne treba oslanjati niti ga koristiti kao jedinu osnovu za
          donošenje odluka bez da se pri tome konzultira primarne, točnije,
          potpunije, složenije ili ažurnije izvore informacija. Bilo kakvo
          oslanjanje na materijal sadržan na ovoj web i mobilnoj aplikaciji
          isključivo je pitanje Vašeg osobnog preuzimanja rizika.
        </p>
        <p className={styles.uvjetiDesc}>
          Web i mobilne aplikacije mogu sadržavati određene povijesne
          informacije. Povijesne informacije, po prirodi stvari, nisu ažurne i
          pružaju se samo kao referenca. Mi pridržavamo pravo izmijeniti sadržaj
          ovih web i mobilnih aplikacija u bilo koje doba, ali nismo u obvezi
          ažurirati bilo koju informaciju sadržanu na našim web stranicama i
          aplikacijama. Vi ste suglasni da je Vaša odgovornost pratiti promjene
          na našim web stranicama i mobilnim aplikacijama.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>6. PROMJENE USLUGA I/ILI CIJENA</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Cijene za naše usluge podložne su promjenama, bez ikakve prethodne
          obavijesti o istome. Mi pridržavamo pravo u bilo koje doba promijeniti
          ili prestati pružati Usluge (ili bilo koji dio ili sadržaj istih) bez
          prethodne obavijesti o tome u bilo koje doba. Mi ne odgovaramo Vama
          niti bilo kojoj trećoj strani za bilo kakve promjene, izmjene cijena,
          obustavu ili prestanak pružanja Usluga.
        </p>
        <p className={styles.uvjetiDesc}>
          Usluga objavljivanja oglasa za slobodna radna mjesta na web i mobilnoj
          aplikaciji Društva naplaćuje se u skladu s CJENIKOM važećim u trenutku
          objavljivanja oglasa.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>7. USLUGE</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Određeni proizvodi ili usluge mogu biti dostupni isključivo online
          putem web i mobilnih aplikacija. Ovi proizvodi ili usluge mogu imati
          ograničenu količinu i podliježu povratu ili zamjeni samo sukladno
          našim Pravilima o povratu robe.
        </p>
        <p className={styles.uvjetiDesc}>
          Mi ne jamčimo da će kvaliteta bilo kojih proizvoda, usluga,
          informacija ili drugog materijala kojeg ste kupili ili pribavili
          ispuniti Vaša očekivanja, niti da će bilo koje greške u pružanju
          Usluge biti ispravljene.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>8. POVEZNICE (LINKOVI) TREĆIH STRANA</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Određeni sadržaj, proizvodi i usluge dostupni na našim mobilnim
          aplikacijama i web stranicama na web adresi www.zaposlise.hr mogu
          uključivati materijale trećih strana.
        </p>
        <p className={styles.uvjetiDesc}>
          Poveznice (linkovi) trećih strana na ovim web stranicama mogu Vas
          usmjeriti na web stranice trećih strana, a koje nisu povezane s nama.
          Mi ne odgovaramo za istraživanje ili ocjenjivanje sadržaja ili
          točnosti, te mi ne jamčimo i nećemo snositi nikakvu odgovornost za
          bilo koje materijale trećih strana ili web stranice i mobilne
          aplikacije trećih strana, kao niti za bilo koje druge materijale,
          proizvode ili usluge trećih strana. Mi ne odgovaramo za bilo koje
          gubitke ili štete vezane za kupnju ili korištenje robe, usluga,
          izvora, sadržaja ili bilo koje druge transakcije provedene vezano za
          web stranice ili mobilne aplikacije trećih strana. Molimo pažljivo
          pregledajte pravila i prakse treće strane, te budite sigurni da ih
          razumijete prije nego li se uključite u bilo kakve transakcije.
          Pritužbe, zahtjevi, bojazni ili pitanja u pogledu proizvoda treće
          strane trebaju biti upućene relevantnoj trećoj strani.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>
            9. KOMENTARI, POVRATNE INFORMACIJE (FEEDBACK) I DRUGE PRIJAVE/
            DOPISI KORISNIKA
          </strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Ako, na naš zahtjev, Vi pošaljete određene specifične dopise ili nam,
          bez našeg traženja, šaljete kreativne ideje, savjete, prijedloge,
          planove ili druge materijale, bilo online, putem e-maila, redovnom
          poštom ili na koji drugi način (zajednički obuhvaćeno terminom:
          ‘komentari’), Vi ste suglasni da mi možemo, u bilo koje doba, bez
          ikakvih ograničenja, uređivati, kopirati, objaviti, distribuirati,
          prevesti ili na drugi način koristiti na bilo kojem mediju, bilo koje
          komentare koje nam proslijedite. Mi sada nismo niti ćemo u budućnosti
          biti u bilo kakvoj obvezi (1) čuvati bilo koje komentare u povjerenju;
          (2) isplatiti naknadu za bilo koje komentare; ili (3) odgovoriti na
          bilo koje komentare.
        </p>
        <p className={styles.uvjetiDesc}>
          Mi možemo, ali nismo u obvezi to učiniti, nadzirati, uređivati ili
          ukloniti sadržaj koji prema svojoj diskrecijskoj ocjeni utvrdimo kao
          nezakonit, uvredljiv, prijeteći, klevetnički, pogrdan, pornografski,
          opscen ili na drugi način uvredljiv ili da povređuje prava
          intelektualnog vlasništva bilo koje strane ili ove Opće uvjete
          korištenja Usluga.
        </p>
        <p className={styles.uvjetiDesc}>
          Vi potvrđujete da Vaši komentari neće povrijediti bilo koja prava bilo
          koje treće strane, uključujući autorska prava, prava žiga, pravila
          zaštite privatnosti, prava identiteta ili druga osobna prava, ili
          prava intelektualnog vlasništva. Nadalje potvrđujete da Vaši komentari
          neće sadržavati klevetničke ili na drugi način nezakonite, pogrdne ili
          opscene materijale, ili pak sadržavati bilo kakve računalne viruse ili
          drugi maliciozan softver (malware) koji bi mogao na bilo koji način
          utjecati na funkcioniranje Usluga ili na bilo koje povezane web
          stranice.
        </p>
        <p className={styles.uvjetiDesc}>
          Ne smijete koristiti lažne e-mail adrese, pretvarati se da ste netko
          drugi ili na drugi način dovoditi u zabunu nas ili treće strane oko
          pitanja izvora bilo kojih komentara. Vi ste isključivo odgovorni za
          bilo koje komentare koje Vi date i za njihovu točnost. Mi nismo
          odgovorni i ne preuzimamo nikakvu građansku odgovornost za bilo koje
          komentare koje objavite Vi ili bilo koja treća strana.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>10. OSOBNE INFORMACIJE</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Za Vaše predavanje osobnih informacija putem Zaposlise web stranice
          vrijede naša Pravila o zaštiti privatnosti. Kako biste pogledali naša
          Pravila o zaštiti privatnosti, kliknite{" "}
          <Link className={styles.uvjetiLink} href="/politika-privatnosti">
            OVDJE
          </Link>
          .
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>11. GREŠKE, NETOČNOSTI I PROPUSTI</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Povremeno na našoj web stranici ili unutar Usluge mogu biti objavljene
          informacije koje sadrže tipografske greške, netočnosti ili propuste
          koji se mogu odnositi na naše usluge. Mi pridržavamo pravo ispraviti
          bilo koje greške, netočnosti ili propuste, te promijeniti ili
          ažurirati informacije ili otkazati narudžbe ako su bilo koje
          informacije u okviru Usluge ili na bilo kojoj povezanoj web stranici
          netočne u bilo koje doba bez prethodne obavijesti.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>12. ZABRANJENO KORIŠTENJE</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Pored ostalih zabrana koje su navedene u Općim uvjetima korištenja
          Usluga, također ne smijete koristiti web stranice ili njihov sadržaj:
        </p>
        <ol>
          <li>za bilo koje nezakonite svrhe</li>
          <li>
            da biste nagovarali druge na počinjenje ili sudjelovanje u bilo
            kakvim nezakonitim radnjama
          </li>
          <li>
            da biste povrijedili bilo koje međunarodne, savezne, pokrajinske ili
            državne propise, pravila, zakone ili pravilnike
          </li>
          <li>
            da biste povrijedili ili oštetili naša prava intelektualnog
            vlasništva ili prava intelektualnog vlasništva drugih
          </li>
          <li>
            da biste uznemiravali, zlorabili, vrijeđali, oštetili, oklevetali,
            uvrijedili, omalovažili, zastrašili ili vršili diskriminaciju po
            osnovi spola, spolne orijentacije, vjerske pripadnosti, podrijetla,
            rase, dobi, nacionalnosti ili invaliditeta
          </li>
          <li>
            da biste prenijeli lažne podatke ili podatke koji dovode u zabludu
          </li>
          <li>
            da biste prenijeli podatke (upload) ili prenosili viruse ili
            maliciozne kodove koji će ili mogu biti korišteni na način koji će
            utjecati na funkcionalnost ili rad Usluge ili bilo kojih povezanih
            web stranica, drugih web stranica ili Interneta
          </li>
          <li>
            da biste prikupljali ili pratili osobne informacije drugih osoba
          </li>
          <li>
            da biste slali neželjenu elektroničku poštu kao spam, phish, pharm,
            pretext, spider, crawl, ili scrape
          </li>
          <li>za bilo koje opscene ili nemoralne svrhe</li>
          <li>
            da biste ometali ili zaobišli sigurnosne elemente Usluge ili bilo
            kojih povezanih web stranica, drugih web stranica ili Interneta
          </li>
        </ol>
        <p className={styles.uvjetiDesc}>
          Mi pridržavamo pravo okončati Vaše korištenje Usluge ili bilo kojih
          povezanih web stranica i mobilnih aplikacija radi kršenja bilo kojih
          zabranjenih oblika korištenja.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>13. ODRICANJE OD JAMSTAVA; OGRANIČENJE ODGOVORNOSTI</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Mi ne jamčimo, ne dajemo obvezujuće izjave niti garantiramo da će Vaše
          korištenje naše usluge biti neprekinuto, pravovremeno, sigurno ili bez
          grešaka.
        </p>
        <p className={styles.uvjetiDesc}>
          Mi ne jamčimo da će rezultati koji se mogu dobiti slijedom korištenja
          usluge biti točni ili pouzdani. Vi ste suglasni da Vam mi možemo
          povremeno ukidati usluge kroz neodređeno razdoblje ili otkazati uslugu
          u bilo koje doba, bez davanja prethodne obavijesti o tome.
        </p>
        <p className={styles.uvjetiDesc}>
          Vi ste izričito suglasni da Vaše korištenje ili nemogućnost korištenja
          usluge pada isključivo na Vaš rizik. Usluga i svi proizvodi i usluge
          koje su Vam isporučene putem usluge su (izuzev ako mi izrijekom to
          izjavimo) pružene ‘u viđenom stanju’ i ‘prema dostupnosti’ za Vaše
          korištenje, bez postojanja bilo kakvih izjava, jamstava ili uvjeta
          bilo koje vrste, bilo izričitih ili implicitnih, uključujući sva
          prešutna jamstva ili uvjete o pogodnosti za prodaju, kvalitetu izrade,
          odgovaranje određenoj svrsi, trajnost, vlasnički naslov i nepostojanje
          povrede.
        </p>
        <p className={styles.uvjetiDesc}>
          Ni u kojem slučaju, direktori, službenici, zaposlenici, povezana
          društva, agenti, izvođači, stažisti, dobavljači, pružatelji usluga ili
          primatelji licencije Društva neće odgovarati za bilo koju povredu,
          gubitak, potraživanje ili bilo koje izravne, neizravne, slučajne,
          kaznene (punitivne), posebne ili posljedične štete bilo koje vrste,
          uključujući, između ostalog, gubitak profita, gubitak prihoda, gubitak
          ušteđevine, gubitak podataka, troškove zamjene, ili bilo kakve slične
          štete, neovisno o tome proizlaze li iz ugovora, delikta (uključujući
          nepažnju), objektivne odgovornosti ili nastale na drugi način, a koja
          se javi zbog Vašeg korištenja bilo koje usluge ili bilo kojih
          proizvoda koje ste stekli koristeći uslugu, kao i od bilo kojeg drugog
          potraživanja vezanog na bilo koji način za Vaše korištenje usluge ili
          bilo kojeg proizvoda, uključujući, između ostalog, bilo koje greške
          ili propuste u bilo kojem sadržaju ili bilo koji gubitak ili štetu
          bilo koje vrste koje su nastale kao rezultat korištenja usluge ili
          bilo kojeg sadržaja (ili proizvoda) koji je objavljen, prenesen ili na
          drugi način učinjen dostupnim putem usluge, čak i ako ste obaviješteni
          o mogućnosti navedenoga. Zato što neke države ili jurisdikcije ne
          dozvoljavaju isključenje ili ograničenje odgovornosti za posljedične
          ili slučajne štete, u takvim državama ili jurisdikcijama naša će
          odgovornost biti ograničena u najvećoj mogućoj mjeri dozvoljenoj
          pravom.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>14. NAKNADA ŠTETE</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Suglasni ste i pristajete naknaditi štetu, obraniti i ne smatrati
          odgovornim ICT-insisto d.o.o. i naše društvo osnivača, podružnice,
          povezana društva, partnere, službenike, direktore, agente, izvođače,
          stjecatelje licencije, pružatelje usluga, podizvođače, dobavljače,
          stažiste i zaposlenike, u slučaju bilo kakvih potraživanja ili
          zahtjeva koji budu istaknuti, uključujući u to i razumne odvjetničke
          troškove, koje je izazvala treća strana zbog ili koji se jave kao
          rezultat Vaše povrede ovih Općih uvjeta korištenja Usluga ili
          dokumenata sadržanih u Uvjetima u obliku pozivanja na iste, ili Vaše
          povrede bilo kojeg zakona ili prava treće strane.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>
            15. OBAVIJEST O NAČINU PODNOŠENJA PRIGOVORA KORISNIKA WEB I MOBILNE
            APLIKACIJE DRUŠTVA
          </strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Sukladno članku 10. Zakona o zaštiti potrošača (NN 41/14, 110/15)
          obavještavamo potrošače/korisnike usluge Društva da nezadovoljstvo u
          odnosu na pruženu uslugu mogu iskazati prigovorom. Prigovor možete
          poslati poštom na adresu ICT-insisto d.o.o., Gornjostupnička 27 b,
          10255 Gornji Stupnik i e-poštom na adresu podrska@zaposlise.hr.
        </p>
        <p className={styles.uvjetiDesc}>
          Društvo će odgovoriti na sve prigovore najkasnije 15 dana nakon
          njihova primitka i predložiti način njihova rješavanja. Tijekom tih 15
          dana korisnik usluge Zaposlise se odriče arbitraže trećih strana i
          davanja informacija u medije. U slučaju da prigovori nisu riješeni
          mirnim putem, za njihovo rješavanje nadležan je sud u Zagrebu.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>16. ZAŠTITA PRAVA INTELEKTUALNOG VLASNIŠTVA</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Prava koja se odnose na naše web stranice i mobilne aplikacije,
          uključuje tekst, video i audio materijal, bazu podataka, programski
          kod, format i sve ostale materijale, softver, nazive pripadaju Društvu
          te nije dozvoljena prodaja, distribucija, umrežavanje i promjena bilo
          kojeg dijela web stranice i mobilne aplikacije Društva. Također, nije
          dozvoljeno kopirati sadržaj web stranice i mobilne aplikacije
          djelomično ili u cijelosti bez izričitog odobrenja Društva.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>17. DJELOMIČNA NIŠTAVOST ODREDBI</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          U slučaju da bilo koja odredba ovih Općih uvjeta korištenja Usluga
          bude utvrđena nezakonitom, ništavom ili neprovedivom, takva odredba će
          i neovisno o tome biti provediva do najveće moguće mjere dozvoljene
          važećim pravom, a dio odredbe koji je neprovediv smatrat će se
          izuzetim iz ovih Općih uvjeta korištenja Usluga, pri čemu takvo
          utvrđenje neće imati učinka na valjanost i provedivost bilo kojih
          preostalih odredaba.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>18. RASKID</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Obveze i odgovornosti ugovornih strana koje su nastale prije datuma
          prestanka važenja nastavljaju važiti i nakon prestanka važenja ovog
          ugovora radi svih mogućih svrha. Ovi Opći uvjeti korištenja Usluga su
          na snazi osim ako i sve dok ih ne raskinete bilo Vi ili ih raskinemo
          mi. Vi možete raskinuti ove Opće uvjete korištenja Usluga u bilo koje
          doba šaljući nam obavijest da više ne želite koristiti naše Usluge ili
          samim prestankom korištenja naših web i mobilnih aplikacija.
        </p>
        <p className={styles.uvjetiDesc}>
          Ako prema našoj ocjeni Vi ne uspijete, ili mi sumnjamo da niste
          uspjeli, poštivati bilo koju odredbu ili stavak iz ovih Općih uvjeta
          korištenja Usluga, mi također možemo raskinuti ovaj ugovor u bilo koje
          doba bez prethodne obavijesti i Vi ćete nadalje biti obvezni uplatiti
          sve iznose koji su dospjeli do datuma raskida, uključujući izrijekom i
          taj dan; i/ili na taj način Vam možemo uskratiti pristup našim
          Uslugama (ili bilo kojem dijelu istih).
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>19. CJELOVITI UGOVOR</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Naš propust da ostvarimo, odnosno primijenimo bilo koje pravo ili
          odredbu iz ovih Općih uvjeta za korištenje Usluga, ne predstavlja
          odricanje od takvog prava ili od primjene takve odredbe. Ovi Opći
          uvjeti pružanja Usluga i bilo koja poslovna politika ili operativna
          pravila koja mi postavimo na ovim web i mobilnim aplikacijama vezano
          uz Usluge, predstavlja cjelokupan ugovor i sporazum između Vas i nas,
          te su mjerodavni za Vaše korištenje naše Usluge, imaju prednost
          primjene pred bilo kojim prethodnim ili sada postojećim ugovorima,
          bilo kojim oblicima komunikacije i prijedlozima, bilo pisanim bilo
          usmenim, koji se odvijaju između Vas i nas (uključujući, između
          ostalog, bilo koje ranije verzije ovih Općih uvjeta pružanja Usluga).
        </p>
        <p className={styles.uvjetiDesc}>
          Bilo koje nejasnoće u tumačenju ovih Općih uvjeta korištenja Usluga i
          bilo kojih poslovnih politika ili operativnih pravila koje smo mi
          objavili na ovim web i mobilnim aplikacijama ili vezano za Usluge,
          predstavlja cjelovit ugovor i dogovor između Vas i nas i isti je
          mjerodavan za Vaše korištenje Usluga, ima prednost primjene pred bilo
          kojim ranijim ili sada postojećim ugovorima, oblicima komunikacije i
          prijedlozima, bilo usmenim ili pisanim, nastalih između Vas i nas
          (uključujući, između ostalog, bilo koje ranije verzije ovih Općih
          uvjeta korištenja Usluga). Bilo koje nejasnoće kod tumačenja ovih
          Općih uvjeta korištenja Usluga neće se tumačiti na štetu ugovorne
          strane koja ih je sastavila.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>20. MJERODAVNO PRAVO</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Na ove Opće uvjete pružanja Usluga i bilo koje zasebne ugovore
          temeljem kojih Vam mi pružamo Usluge primjenjuju se odredbe propisa
          važećih u Republici Hrvatskoj kao mjerodavno pravo, a rečeno
          mjerodavno pravo također je mjerodavno i za tumačenje svega navedenog.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>21. PROMJENE OPĆIH UVJETA PRUŽANJA USLUGA</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Možete pregledati najažurniju verziju Općih uvjeta pružanja Usluga u
          bilo koje doba na ovim web stranicama i mobilnim aplikacijama. Mi
          pridržavamo pravo, prema našoj isključivoj diskrecijskoj ocjeni,
          ažurirati, izmijeniti ili zamijeniti bilo koji dio ovih Općih uvjeta
          pružanja Usluga objavljujući ažuriranja i promjene na našim web
          stranicama i mobilnim aplikacijama. Vaša je odgovornost povremeno
          provjeriti na našim web stranicama i mobilnim aplikacijama ima li
          kakvih promjena. Vaše neprekinuto korištenje naših web stranica i
          mobilnih aplikacija ili pristupanje istima ili traženje Usluga nakon
          objave bilo kakvih promjena ovih Općih uvjeta pružanja usluga
          predstavlja Vaš prihvat tih promjena.
        </p>
        <p className={styles.uvjetiDesc}>
          <strong>KONTAKT INFORMACIJE</strong>
        </p>
        <p className={styles.uvjetiDesc}>
          Pitanja koja imate o Općim uvjetima pružanja Usluga možete nam poslati
          na adresu:{" "}
          <Link
            className={styles.uvjetiLink}
            href="mailto:podrska@zaposlise.hr"
          >
            podrska@zaposlise.hr
          </Link>
          .
        </p>
        <p className={styles.uvjetiDesc}>Ažurirano: [03.01.2023.]</p>
      </div>
    </div>
  );
};

export default UvjetiKorištenja;
