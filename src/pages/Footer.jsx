import React from "react";
import "../pages/Footer.css";
import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import linkedin from "../images/icons/linkedin.png";
import twitter from "../images/icons/twitter.png";

export default function Footer() {
  return (
    <footer className="footer">
    
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
   
      </div>
        <p>&copy; 2025 Sports & Shoes | Todos los derechos reservados</p>
     
    </footer>
  );
}
