import React from "react";
import LeftArrow from "../../icons/left-arrow.png";
import RightArrow from "../../icons/right-arrow.png";
import "./HomeSlider.scss";

const HomeSlider = () => {
  return (
    <article className="slider">
      <div className="slider-txt">
        <div>
          <p>Novos produtos</p>
          <h1>Instrumentos</h1>
          <p>profissionais</p>
          <button>Confira</button>
        </div>
      </div>

      <img className="left-arrow" src={LeftArrow} alt="left-arrow" />
      <img className="right-arrow" src={RightArrow} alt="right-arrow" />
      <div className="controls">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </article>
  );
};

export default HomeSlider;
