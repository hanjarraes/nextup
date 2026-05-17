import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icon/Logo.svg";

import "./style.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header id="header">
      <div className="container justify-content-center justify-content-lg-between">
        <a className="site-logo" href="/">
          <img src={Logo} alt="logo-Nextup" className="logo-header" />
        </a>
        <nav
          role="navigation"
          id="nav-main"
          className="navigation-main d-none d-lg-flex"
        >
          <a href="#header">Home</a>
          <a href="#about-us">About</a>
          <a href="#service">Service</a>
          <a href="#works">Works</a>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigate("/contatcs");
            }}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
