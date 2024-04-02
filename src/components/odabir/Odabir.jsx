import React from "react";
import Upoznaj from "../upoznaj/Upoznaj";

const Odabir = () => {
  return (
    <section className="odabir">
      <div className="odabir-container">
        <div>
          <img
            loading="lazy"
            src="https://zaposlise.hr/wp-content/uploads/2021/11/bg1-img.jpg"
            alt="mlade perspektivne osobe provode vrijeme na elektroničkim uređajima"
          />
        </div>
        <div className="odabir-content">
          <h3>Izaberi slobodu odabira zaposlenika – bilo gdje, bilo kad</h3>
          <p>
            Uživaj u slobodi odabira radne lokacije uz Zaposlise. Bez vezivanja
            uz računalo, jednostavno popuni profil tvrtke, objavi oglas ili
            snimi video-oglas te pretražuj kandidate putem mobilnog uređaja.
          </p>
          <p>
            <b className="odabir-content__bold">
              Isprobaj potpuno novi i moderni način pronalaska talenata s
              Zaposlise.
            </b>
          </p>
        </div>
      </div>

      <Upoznaj
        title={"Stotine Kandidata – tvoj izbor za uspješnu suradnju."}
        stylePosition="upoznajDva"
      />
    </section>
  );
};

export default Odabir;
