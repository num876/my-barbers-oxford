import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <Logo />
        </a>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact" className="btn-primary walk-in-btn">Walk-ins Welcome</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" className="btn-primary walk-in-btn" onClick={closeMenu}>Walk-ins Welcome</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
