import React, { useState, useRef } from "react";
import Footer from "../../container/Footer";
import Header from "../../container/Header";
import emailjs from "emailjs-com";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

// image
import Bealive from "../../assets/img/orang_nulis.svg";
import Understending from "../../assets/icon/ic-understanding.svg";
import Collabiration from "../../assets/icon/ic-collabiration.svg";
import Progressive from "../../assets/icon/ic-progressive.svg";
import Support from "../../assets/icon/ic-support.svg";
import Coffee from "../../assets/img/coffee.svg";
import DashboardImg from "../../assets/img/dashboard.svg";
import Cats from "../../assets/img/cats.svg";
import ImgSignUp from "../../assets/img/sigup.svg";
import Baba from "../../assets/img/Baba.svg";
import Botol from "../../assets/img/botol.svg";
import Illustration1 from "../../assets/img/Card/illustration-services-1.svg";
import Illustration2 from "../../assets/img/Card/illustration-services-2.svg";
import Illustration3 from "../../assets/img/Card/illustration-services-3.svg";
import Illustration4 from "../../assets/img/Card/illustration-services-4.svg";
import Map from "../../container/Map";

const cardData = [
  {
    img: Illustration1,
    title: "WEB Development",
    desc: "Develop your website with the latest technology stack and ensureit is launched successfully and properly maintained.",
  },
  {
    img: Illustration2,
    title: "APP Development",
    desc: "Apps are designed with a focus on the user as the center of the design process so that your Apps users are cozy.",
  },
  {
    img: Illustration3,
    title: "UI/UX Design",
    desc: "We design the UI/UX according to the business brand identity to give a consistent impression to your customers.",
  },
  {
    img: Illustration4,
    title: "Brand Identity",
    desc: "Creating a strong brand identity to build a positive image and differentiate the brand from competitors.",
  },
];

const Believe = [
  {
    img: Understending,
    title: "Understanding",
    desc: "We are committed to building healthy partnerships, providing genuine support, and wholeheartedly dedicating ourselves tobeing part of your success. Together, we will support youevery step of the way.",
  },
  {
    img: Progressive,
    title: "Progressive",
    desc: "Starting a transformative journey towards your growth. With our dedication to creativity to ensure a product that fits your project to support your company's growth.",
  },
  {
    img: Support,
    title: "Support",
    desc: "We are committed to building healthy partnerships, providing genuine support, and wholeheartedly dedicating ourselves to being part of your success. Together, we will support you every step of the way.",
  },
  {
    img: Collabiration,
    title: "Collaboration",
    desc: "We value collaborative efforts and close communication with our clients. You are an important part of our process, and we encourage your active involvement throughout the process. Together, we can achieve great results through continuous communication and participation.",
  },
];

const ServiceEmailId = process.env.REACT_APP_API_URL_SERVICE_ID_EMAIL;
const TemplateId = process.env.REACT_APP_API_URL_TEMPLATE_ID_EMAIL;
const UserEmailId = process.env.REACT_APP_API_URL_USER_ID_EMAIL;

const Home = () => {
  const form = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(ServiceEmailId, TemplateId, form.current, UserEmailId)
      .then(
        (result) => {
          toast.success(`message successfully sent 😉`);
          form.current.reset();
          console.log(result.text);
          setIsLoading(false);
        },
        (error) => {
          toast.error(`message failed to send 😨`);
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <Header />
      <div className="hero">
        <div className="title-hero" data-aos="fade-up">
          <div className="d-none d-lg-block">
            <div> Transforming Your Big Idea </div>
            <div>
              Into Reality:<span>Design.Develop.Ship.</span>
            </div>
          </div>
          <div className="d-block d-lg-none">
            <div className="mb-3">Transforming Your Big Idea Into Reality:</div>
            <span>Design. Develop. Ship.</span>
          </div>
        </div>
        <div className="desc-hero" data-aos="fade-up">
          Focus on solutions to help clients deal with business problems
        </div>
        <a
          href="https://calendly.com/nextupagency/30min"
          className="btn btn-primary btn-hero"
          data-aos="fade-up"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Meeting
        </a>
      </div>
      <div id="about-us" className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 title-about-us" data-aos="fade-up">
              About Us
            </div>
            <div className="col-lg-8 desc-about-us" data-aos="fade-up">
              <span> nextup agency</span> is a creative design and development
              agency based in Batam, Indonesia. We are here to be part of your
              business development strategy through design and software
              development solutions that match your business values and
              identity, so as to create digital products that have a positive
              impact and drive sustainable business growth.
            </div>
          </div>
        </div>
      </div>
      <div id="service" className="take-look">
        <div className="container">
          <div className="title-take-look" data-aos="fade-up">
            <div>Take a look at </div>
            <div>the services we offer.</div>
          </div>
          <div className="list-card-take-look row">
            {cardData.map((data, idx) => {
              return (
                <div
                  key={`card-${idx}`}
                  className="card-take-look col-12 col-sm-6 col-lg-3"
                  data-aos="fade-up"
                >
                  <img
                    src={data.img}
                    alt={`img-card-${idx}`}
                    className="img-card"
                  />
                  <div className="card-title-take-look">
                    <span>{data.title}</span>
                    <i className="ri-arrow-right-up-line" />
                  </div>
                  <p>{data.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="yunani" />
      <div className="believe">
        <div className="container">
          <div className="title-believe">What we believe in.</div>
          <div className="row">
            <div className="d-flex d-lg-none justify-content-center col-lg-6 image-container-believe">
              <img
                src={Bealive}
                alt={`img-Bealive`}
                className="img-believe"
                data-aos="fade-left"
              />
            </div>
            <div className="col-lg-6 ">
              <div className="list-card-bealive row">
                {Believe.map((data, idx) => {
                  return (
                    <div
                      className="card-believe col-12 col-lg-6"
                      key={`believe-${idx}`}
                      data-aos="fade-up"
                    >
                      <img
                        src={data.img}
                        alt={`img-belive-${idx}`}
                        className="img-card"
                      />
                      <span>{data.title}</span>
                      <p>{data.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="d-none d-lg-flex justify-content-center col-lg-6 image-container-believe">
              <img
                src={Bealive}
                alt={`img-Bealive`}
                className="img-believe"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="works" className="works">
        <div className="container">
          <div className="title-works">Let's See Our Works</div>
          <div className="row ">
            <div className="col-12 col-lg-5 mt-4">
              <img
                src={Coffee}
                alt={`img-works`}
                className="w-100"
                data-aos="fade-up"
              />
            </div>
            <div className="col-12 col-lg-7 mt-4">
              <img
                src={DashboardImg}
                alt={`img-works`}
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <img
                src={Cats}
                alt={`img-works`}
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 mt-4">
              <img
                src={ImgSignUp}
                alt={`img-works`}
                className="w-100"
                data-aos="fade-up"
              />
            </div>
            <div className="col-12 col-lg-4 mt-4">
              <img
                src={Baba}
                alt={`img-works`}
                className="w-100"
                data-aos="fade-up"
              />
            </div>
            <div className="col-12 col-lg-4 mt-4">
              <img
                src={Botol}
                alt={`img-works`}
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="consulting">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-consulting">FREE CONSULTATION</div>
              <div className="desc-consulting">
                You've come all the way here, why not take the first step to
                contact us? It's free!
              </div>
              <p>
                We are committed to building healthy partnerships, providing
                genuine support, and wholeheartedly dedicating ourselves to
                being part of your success strategy. Together, we will support
                you every step of the way.
              </p>
            </div>
            <div className="col-lg-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="consulting-form-title mb-1">Name</div>
                    <input
                      name="user_name"
                      className="custom-input form-control"
                      type="text"
                      required
                      placeholder="Input full name"
                    />
                  </div>
                  <div className="col-lg-6  mt-3 mt-lg-0">
                    <div className="consulting-form-title mb-1">Email</div>
                    <input
                      name="user_email"
                      className="custom-input form-control"
                      type="email"
                      required
                      placeholder="Type your email"
                    />
                  </div>
                  <div className="col-lg-6 mt-3 mt-lg-5">
                    <div className="consulting-form-title mb-1">Phone</div>
                    <input
                      name="user_phone"
                      className="custom-input form-control"
                      type="text"
                      required
                      placeholder="+62 xx xxxx xxxx"
                    />
                  </div>
                  <div className="col-lg-6 mt-3 mt-lg-5">
                    <div className="consulting-form-title mb-1">Company</div>
                    <input
                      name="user_company"
                      className="custom-input form-control"
                      type="text"
                      required
                      placeholder="Type your company name"
                    />
                  </div>
                  <div className="col-lg-12 mt-3 mt-lg-5">
                    <div className="consulting-form-title mb-1">Massage</div>
                    <textarea
                      name="user_message"
                      required
                      className="custom-input-area form-control"
                      placeholder="Describe yourself here..."
                    ></textarea>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <button type="submit" className="btn btn-dark w-100">
                      {isLoading ? <CircularProgress /> : "Send"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        {/* <Map /> */}
      <div className="floating-button d-lg-none">
        <div className={`floating-button ${menuOpen ? "open" : ""}`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="ri-menu-line" />
          </button>
          <nav className="mobile-menu">
            <ul>
              <li>
                <a href="#header">
                  Home <span>😊</span>
                </a>
              </li>
              <li>
                <a href="#about-us">
                  About <span>🤔</span>
                </a>
              </li>
              <li>
                <a href="#service">
                  Service <span>😉</span>
                </a>
              </li>
              <li>
                <a href="#works">
                  Works <span>🫡</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
