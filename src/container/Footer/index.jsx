import React from "react";
import Logo from "../../assets/icon/logo-slogan-white.svg";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./style.scss";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="content-footer">
          <img src={Logo} alt="logoUis" className="logo-footer pe-5" />
          <div className="address-footer">
            Jl. Duyung, Komp. Sri Mas No.10, Sungai Jodoh, Batu Ampar, Kota
            Batam, Indonesia
          </div>
          <div>+62 851 8611 6633</div>
          <div>@hello.nextup.fun</div>
        </div>

        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <nav
              role="navigation"
              id="nav-main"
              className="navigation-main d-flex justify-content-center justify-content-lg-start"
            >
              <a className="footer-nav" href="#header">Home</a>
              <a className="footer-nav" href="#about-us">About</a>
              <a className="footer-nav" href="#service">Service</a>
              <a className="footer-nav" href="#works">Works</a>
              <div className="footer-nav" onClick={() => navigate("/contatcs")}>Contact Us</div>
            </nav>
          </div>

          <div className="col-12 col-lg-4  text-lg-end text-center">
            we build love in Indonesia
            <i className="ri-heart-2-fill" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
