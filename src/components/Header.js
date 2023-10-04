import React from "react";
import "./Header.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Page/Main";

const Header = () => {
  return (
    <>
      <div className="header"></div>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
