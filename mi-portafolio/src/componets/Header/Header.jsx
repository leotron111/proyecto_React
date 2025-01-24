import { useState } from "react";
import logo from "../../assets/logo.jpg"; // Importamos la imagen del logo
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
        <div className="menu-btn" onClick={() => setMenuOpen((prevState) => !prevState)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`overlay ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <ul>
          {menuItems && menuItems.length > 0 && menuItems.map((item, index) => (
            <li key={index}><a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a></li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
