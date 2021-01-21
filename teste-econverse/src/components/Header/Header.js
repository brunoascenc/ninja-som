import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import Search from "../../icons/search.png";
import Contact from "../../icons/whatsapp.png";
import CartIcon from "../../icons/cart.png";
import Logo from "../../images/logo.png";
import Avatar from "../../icons/avatar.png";
import Select from "../../icons/select.png";

import NavHeader from "../NavHeader/NavHeader";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <SubHeader />

      <div className="header-elements">
        <img className="logo-img" src={Logo} alt="logo" />
        <form>
          <input type="text" placeholder="Busque aqui..." name="search" />
          <button type="submit">
            <img src={Search} alt="search-icon" />
          </button>
        </form>
        <div className="contact-number">
          <img src={Contact} alt="contact-number"></img>
          <p>(11) 99999-9999</p>
        </div>
        <div className="login">
          <img src={Avatar} alt="avatar" />
          <div className="login-username">
            <div>
              <h3>Olá, visitante</h3>
              <img src={Select} alt="select-arrow" />
            </div>
            <p>Minha conta</p>
          </div>
        </div>
        <div className="cart-info">
          <img src={CartIcon} alt="cart-icon" />
          <p>Seu carrinho</p>
          <p>0 item (s)</p>
        </div>
      </div>

      <NavHeader />
    </header>
  );
};

export default Header;
