import React from "react";
import IconNextup from "../../assets/icon/logo-white-nextup 1.svg";
import CircularProgress from "@mui/material/CircularProgress";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

import "./style.scss";


const ServiceEmailId = process.env.REACT_APP_API_URL_SERVICE_ID_EMAIL; 
const TemplateId = process.env.REACT_APP_API_URL_TEMPLATE_ID_EMAIL; 
const UserEmailId = process.env.REACT_APP_API_URL_USER_ID_EMAIL; 

const Contatcs = () => {
  const [dimension, setDimension] = React.useState({
    width: window.innerWidth,
  });
  const form = React.useRef();
  const [isLoading, setIsLoading] = React.useState(false);
  const { width } = dimension;

  React.useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        ServiceEmailId,
        TemplateId,
        form.current,
        UserEmailId
      )
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
      <div className="row contats-page" style={{ width: width }}>
        <div className="col-lg-4 bg-contatcs">
          <img src={IconNextup} alt={`icon-nextup`} />
          <span>Take Your Business to the Next Level Up Let Us Help You!</span>
        </div>
        <div className="col-lg-8 px-0">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contats-form">
              <div className="contacs-link">
                <a href="/">
                  <i className="ri-arrow-left-up-line" /> Back to home
                </a>
              </div>
              <div className="w-100">
                <div className="contacs-form-title mb-1">Name</div>
                <input
                  name="user_name"
                  required
                  className="custom-input form-control"
                  type="text"
                  placeholder="Input full name"
                />
              </div>
              <div className="mt-3 w-100">
                <div className="contacs-form-title mb-1">Email</div>
                <input
                  name="user_email"
                  required
                  className="custom-input form-control"
                  type="email"
                  placeholder="Type your email"
                />
              </div>
              <div className="mt-3 w-100">
                <div className="contacs-form-title mb-1">Phone</div>
                <input
                  name="user_phone"
                  required
                  className="custom-input form-control"
                  type="text"
                  placeholder="+62 xx xxxx xxxx"
                />
              </div>
              <div className="mt-3 w-100">
                <div className="contacs-form-title mb-1">Company</div>
                <input
                  name="user_company"
                  required
                  className="custom-input form-control"
                  type="text"
                  placeholder="Type your company name"
                />
              </div>
              <div className="mt-3 w-100">
                <div className="contacs-form-title mb-1">Massage</div>
                <textarea
                  name="user_message"
                  required
                  className="custom-input-area form-control"
                  placeholder="Describe yourself here..."
                ></textarea>
              </div>
              <div className="mt-4 w-100">
                <button className="btn btn-dark w-100">
                  {isLoading ? <CircularProgress /> : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contatcs;
