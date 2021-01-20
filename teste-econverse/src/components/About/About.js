import React from "react";
import Designer from "../../images/designer.png";
import LeftArrow from "../../icons/leftarrow2.png";
import RightArrow from "../../icons/rightarrow2.png";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <article>
        <h1>Sobre nós</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ‘Content here, content here’, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for ‘lorem ipsum’ will uncover many web sites still in their
          infancy. Lorem Ipsum as their default model text, and a search for
          ‘lorem ipsum’ will uncover many web sites still in their infancy.
          Lorem Ipsum as their default model text, and a search for ‘lorem
          ipsum’ will uncover many web sites still in their infancy.{" "}
        </p>
      </article>

      <div className="designer">
        <div className="info">
          <img src={Designer} alt="avatar" />
          <div>
            <p className="nome">Felipe Salmin</p>
            <p className="profissao">Designer</p>
          </div>

          <p className="description">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for ‘lorem ipsum’
          </p>
        </div>

        <img className="left-arrow" src={LeftArrow} alt="left-arrow" />
        <img className="right-arrow" src={RightArrow} alt="right-arrow" />
      </div>
    </section>
  );
};

export default About;
