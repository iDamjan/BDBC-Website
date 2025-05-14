import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">bdbc</a>
        </div>
        <div className="navbar-links">
          <a href="#home" className="nav-link">
            home
          </a>
          <a href="#about" className="nav-link">
            about
          </a>
          <a href="#events" className="nav-link">
            events
          </a>
          <a href="#gallery" className="nav-link">
            gallery
          </a>
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
          >
            contact
          </a>
        </div>
        <div className="navbar-join">
          <a
            href="#"
            className="join-button"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
          >
            join us
          </a>
        </div>
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
          <a
            href="#home"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            home
          </a>
          <a
            href="#about"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            about
          </a>
          <a
            href="#events"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            events
          </a>
          <a
            href="#gallery"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            gallery
          </a>
          <a
            href="#"
            className="mobile-link"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
              setIsOpen(false);
            }}
          >
            contact
          </a>
          <a
            href="#"
            className="mobile-link mobile-join"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
              setIsOpen(false);
            }}
          >
            join us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
