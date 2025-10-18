import React, { useState, useEffect } from 'react'
import './navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <img src="/src/assets/logo.png" alt="Rosâme Marrakech Logo" />
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={isMenuOpen ? 'active' : ''}>
        <li><a href="#home" onClick={toggleMenu}>Accueil</a></li>
        <li><a href="#products" onClick={toggleMenu}>Produits</a></li>
        <li><a href="#about" onClick={toggleMenu}>À Propos</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  )
}
