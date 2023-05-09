import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white p-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center p-2">
         
            
         
        </div>
      </div>
      <p className="text-center d-flex align-items-center justify-content-center">
        <Link to="/about" className="nav-link text-white">
          About
        </Link>
        |
        <Link to="/policy" className="nav-link text-white">
          Privacy Policy
        </Link>
      </p>
      <h6 className="text-center">&copy; 2022-2023 BIG SHOPPER</h6>
    </div>
  );
};

export default Footer;
