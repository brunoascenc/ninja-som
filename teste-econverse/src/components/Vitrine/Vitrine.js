import React, { useState } from "react";
import Modal from "react-modal";
import Close from "../../icons/close.png";
import Zoom from "../../icons/zoom.png";
import Data from "../../data/data.json";
import useFixedPrice from "./FixedPrice";
import "./Vitrine.scss";

function Vitrine() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [addModal, setAddMotal] = useState([]);
  const [fixedPrice] = useFixedPrice();

  function openModal() {
    setIsOpen(true);
  }

  const handleModal = (name) => {
    const modalData = Data.find((instr) => instr.productName === name);
    setAddMotal(modalData);
    openModal();
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="vitrine">
      <Modal
        closeTimeoutMS={50}
        className="modal"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <div className="product-img">
          <img src={addModal.photo} alt={addModal.productName} />
        </div>
        <button className="close-btn" onClick={closeModal}>
          <img src={Close} alt="close" />
        </button>

        <div className="info">
          <p className="product-name">{addModal.productName}</p>
          <p className="product-price">R$ {fixedPrice}</p>
          <p className="description">{addModal.descriptionShort}</p>
          <p className="more-details">Veja mais detalhes do produto</p>
          <button>Adicionar ao carrinho</button>
        </div>
      </Modal>

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
              <li
                key={instrumento.productName}
                onClick={() => handleModal(instrumento.productName)}
              >
                <div>
                  <img src={instrumento.photo} alt={instrumento.productName} />
                  <div className="layer"></div>
                  <div className="quick-view">
                    <img src={Zoom} alt="zoom" />
                    <p>Quick View</p>
                  </div>
                </div>

                <div className="product-info">
                  <p className="product-name">{instrumento.productName}</p>
                  <p className="description">{instrumento.descriptionShort}</p>
                  <p className="price">R$ {fixedPrice}</p>
                </div>
              </li>
            );
          })}
      </ul>

      <button>Ver mais</button>
    </section>
  );
}

export default Vitrine;
