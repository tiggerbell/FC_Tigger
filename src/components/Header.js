import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Page/Main";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container"></div>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
