import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AOS from "aos";
import "aos/dist/aos.css";

import "./assets/scss/styles.scss";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

import Home from "./pages/Home";
import Contatcs from "./pages/Contatcs";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatcs" element={<Contatcs />} />
        </Routes>
      </HashRouter>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        icon
      />
    </>
  );
}

export default App;
