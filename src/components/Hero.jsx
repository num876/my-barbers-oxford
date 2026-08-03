import React from 'react';
import './Hero.css';
import heroBg from '../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <p className="hero-subtitle fade-in-up delay-1">Premium Grooming</p>
          <h1 className="hero-title fade-in-up delay-2">
            My Barbers<br/>
            <span className="gold-text">Oxford</span>
          </h1>
          <p className="hero-description fade-in-up delay-3">
            Fresh Since 2000. Providing high-quality grooming and a welcoming atmosphere in the heart of the Cowley Road community.
          </p>
          <div className="hero-actions fade-in-up delay-4">
            <a href="#services" className="btn-primary btn-dynamic">Our Services</a>
            <a href="#contact" className="btn-outline btn-dynamic-outline">Find Us</a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator fade-in-up delay-5">
        <div className="mouse"></div>
        <p>Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
