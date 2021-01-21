import React from "react";
import LeftArrow from "../../icons/leftarrow2.png";
import RightArrow from "../../icons/rightarrow2.png";
import Akg from "../../images/akg.png";
import Boss from "../../images/boss.png";
import Roland from "../../images/roland.png";
import Shure from "../../images/shure.png";
import "./Marcas.scss";

const Marcas = () => {
  return (
    <section className="marcas">
      <h1>
        As <strong>melhores</strong> marcas
      </h1>
      <p>
        it is a long established fact that a reader will be distracted by the
        readable
      </p>

      <div>
        <img src={Akg} alt="akg" />
        <img src={Boss} alt="boss" />
        <img src={Roland} alt="roland" />
        <img src={Shure} alt="shure" />
      </div>

      <img className="left-arrow" src={LeftArrow} alt="left-arrow" />
      <img className="right-arrow" src={RightArrow} alt="right-arrow" />
    </section>
  );
};

export default Marcas;
