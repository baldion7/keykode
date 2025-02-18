// Header.jsx
import React from 'react';
import {Code2} from 'lucide-react';
import '../styles/Header.css';

const Header = ({scrolled}) => {
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo-wrapper">
                    <Code2 className="logo-icon hover-rotate"/>
                    <a href="/" className="logo-link">
                        <div className="logo-container">
                            <span className="logo-text"> KeyKode </span>
                            <div className="logo-overlay"></div>
                            <pre className="logo-tooltip">
                {`function KeyKode() {
  return innovation;
}`}
              </pre>
                        </div>
                    </a>
                </div>
                <nav className="nav-links">
                    <a href="#about">Nosotros</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#team">Equipo</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;