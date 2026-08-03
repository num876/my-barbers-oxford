import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import heroBg from '../assets/images/hero.jpg';
import Logo from './Logo';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="watermark-text">EST. 2019</div>
      
      <div className="container relative-z">
        <div className="about-collage">
          <div className={`about-image-main ${isVisible ? 'slide-in-left' : 'hidden'}`}>
            <img src={heroBg} alt="Barbershop Interior" />
            <div className="image-overlay"></div>
          </div>
          <div className={`about-image-inset ${isVisible ? 'slide-in-up' : 'hidden'}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0b0e' }}>
            <Logo />
          </div>
        </div>

        <div className={`about-content-card glass-panel ${isVisible ? 'slide-in-right' : 'hidden'}`}>
          <h2 className="section-title text-left">The Craft</h2>
          
          <div className="about-text-content">
            <p className="about-text stagger-1">
              Welcome to <strong>My Barbers Oxford</strong> – Your Neighborhood Barber Shop! We’re more than just a barber shop – we’re a team of passionate barbers who love what we do, and we’re proud to be part of the <strong>vibrant Cowley Road community</strong>.
            </p>
            <p className="about-text stagger-2">
              Founded in 2019 by Klaudio Meta, with one goal in mind: to create a welcoming space where everyone can enjoy <strong>high-quality grooming</strong> at a price that works for students and professionals alike.
            </p>
            <p className="about-text stagger-3">
              Each haircut isn’t just a service, but a <strong>craft we take pride in</strong>. Whether you’re here for a sharp fade, a classic trim, or some style advice, we’re all about making sure you leave feeling confident and refreshed.
            </p>
            <p className="about-text stagger-4">
              We’ve built <strong>strong relationships</strong> with our clients, and for us, it’s about more than just cutting hair – it’s about creating an experience that leaves you coming back time and time again.
            </p>
          </div>

          <div className="about-stats-container">
            <div className="stat-block">
              <span className="stat-number">2019</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">5.0</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
