import React from "react";
import Microfone from "../../images/microfones.png";
import Guitarras from '../../images/guitarras.png'
import Mesa from "../../images/mesadesom.png";
import Teclados from "../../images/teclados.png";
import Violao from "../../images/violao.png";
import Baterias from "../../images/baterias.png";
import "./Instrumentos.scss";

const Instrumentos = () => {
  return (
    <section className="opcoes-instrumentos">
      <div>
        <img src={Guitarras} alt="guitarras" />
        <p>Guitarras</p>
      </div>
      <div>
        <img src={Microfone} alt="microfone" />
        <p>Microfones</p>
      </div>
      <div>
        <img src={Mesa} alt="mesadesom" />
        <p>Mesa de som</p>
      </div>
      <div>
        <img src={Teclados} alt="teclados" />
        <p>Teclados</p>
      </div>
      <div>
        <img src={Violao} alt="violao" />
        <p>Microfones</p>
      </div>
      <div>
        <img src={Baterias} alt="baterias" />
        <p>Baterias</p>
      </div>
    </section>
  );
};

export default Instrumentos;
