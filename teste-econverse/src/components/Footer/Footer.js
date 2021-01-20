import React from "react";
import Instagram from "../../icons/instagram.png";
import Twitter from "../../icons/twitter.png";
import Facebook from "../../icons/facebook.png";
import Visa from "../../icons/visa.png";
import MasterCard from "../../icons/mastercard.png";
import Express from "../../icons/express.png";
import Diners from "../../icons/diners.png";
import Boleto from "../../icons/boleto.png";
import Ssl from "../../icons/ssl.png";
import Mascara from "../../icons/mascara.png";
import Econverse from "../../icons/econverse.png";
import Vtex from "../../icons/vtex.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="institucional">
          <div className="about-footer">
            <h1>Institucional</h1>
            <ul>
              <li>Quem somos</li>
              <li>Nossas Lojas</li>
            </ul>
          </div>

          <div className="atendimento">
            <h1>Atendimento</h1>
            <ul>
              <li>Fale Conosco</li>
              <li>vendas@ninjasm.com.br</li>
            </ul>
          </div>
        </div>

        <div className="support">
          <h1>Ajuda e suporte</h1>

          <ul>
            <li>política de privacidade</li>
            <li>Política de trocas</li>
            <li>Prazos de entrega</li>
            <li>Termos de uso</li>
          </ul>

          <div className="socials">
            <ul>
              <li>
                <img src={Instagram} alt="instagram" />
              </li>
              <li>
                <img src={Twitter} alt="twitter" />
              </li>
              <li>
                <img src={Facebook} alt="facebook" />
              </li>
            </ul>
          </div>
        </div>

        <div className="payment">
          <div className="formas-pagamento">
            <h1>Formas de pagamento</h1>
            <ul>
              <li>
                <img src={Visa} alt="visa" />
              </li>
              <li>
                <img src={MasterCard} alt="master" />
              </li>
              <li>
                <img src={Express} alt="express" />
              </li>
              <li>
                <img src={Diners} alt="diners" />
              </li>
              <li>
                <img src={Boleto} alt="boleto" />
              </li>
            </ul>
          </div>

          <div className="seguranca">
            <h1>Segurança</h1>
            <ul>
              <li>
                <img src={Ssl} alt="ssl" />
              </li>
              <li>
                <img src={Mascara} alt="mascara" />
              </li>
            </ul>
          </div>
        </div>

        <div className="newsletter">
          <form>
            <h3>
              Assine nosso <strong>newsletter</strong> e receba novidades e
              promoções
            </h3>
            <input type="text" name="name" placeholder="seu nome" />
            <input type="email" name="email" placeholder="seu nome" />
            <button>Enviar</button>
          </form>
        </div>
      </div>

      <div className="more-info">
        <div className="container">
          <p>
            NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os
            direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa
            Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ
            07.282.516/0001-15
          </p>

          <div className="logo">
            <img src={Econverse} alt="econverse" />
            <img src={Vtex} alt="vtex" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
