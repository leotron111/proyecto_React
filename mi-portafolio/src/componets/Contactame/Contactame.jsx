import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import "./Contactame.css";

function Contactame() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <section className="contactame">
      <h2 className="contactame-texto">
        <span className="italic">Vamos a</span> crear{" "}
        <span className="bold">algo</span> <br />
        <span className="huge">SIGNIFICATIVO</span> <br />
        <span className="bold italic">JUNTOS</span>
        <span className="small">(pero no para siempre)</span>
      </h2>
      <div className="contactame-boton-container">
        <button className="contactame-boton" onClick={toggleMenu}>
          CONTÁCTAME 🤙
        </button>
        {menuAbierto && (
          <div className="contactame-menu">
            <a href="https://instagram.com/__alelejandr00_" target="_blank" rel="noopener noreferrer" className="contactame-item">
              <FaInstagram /> @__alelejandr00_
            </a>
            <a href="tel:688925092" className="contactame-item">
              <FaPhone /> 688925092
            </a>
            <a href="mailto:leotron700@gmail.com" className="contactame-item">
              <FaEnvelope /> leotron700@gmail.com
            </a>
            <a href="https://github.com/leotron111" target="_blank" rel="noopener noreferrer" className="contactame-item">
              <FaGithub /> github.com/leotron111
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contactame;
