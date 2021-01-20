import React from "react";
import Data from "../../data/data.json";
import "./Vitrine.scss";

function Vitrine() {
  return (
    <section className="vitrine">
      <h1>
        Instrumentos <strong>Destaque</strong>
      </h1>
      <p>
        it is a long established fact that a reader will be distracted by the
        readable
      </p>

      <ul>
        {Data &&
          Data.map((instrumento) => {
            return (
              <li key={instrumento.productName}>
                <img src={instrumento.photo} alt={instrumento.productName} />
                <p className="product-name">{instrumento.productName}</p>
                <p className="description">{instrumento.descriptionShort}</p>
                <p className="price">
                  R${" "}
                  {instrumento.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </li>
            );
          })}
      </ul>

      <button>Ver mais</button>
    </section>
  );
}

export default Vitrine;
