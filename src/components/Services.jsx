import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const servicesList = [
  { name: 'Haircut', price: '£15' },
  { name: 'Skin fade', price: '£17' },
  { name: 'Beard trim', price: '£10' },
  { name: 'Hot towel shave', price: '£15' },
  { name: 'Over 60s', price: '£14' },
  { name: 'Buzz cut', price: '£13' },
  { name: 'Back and sides', price: '£14' },
  { name: 'Long hair', price: '£18' },
  { name: 'Kids haircut', price: '£14' },
  { name: 'Kids skin fade', price: '£16' },
  { name: 'Haircut & beard', price: '£24' },
  { name: 'Haircut & hot towel shave', price: '£30' },
  { name: 'Haircut & hot towel colouring', price: '£60' },
  { name: 'Head wash', price: '£4' },
  { name: 'Waxing', price: '£6' },
  { name: 'Black mask', price: '£15' },
  { name: 'Threading', price: '£8' },
  { name: 'Lines', price: '£4' }
];

const Services = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split services into two columns for a classic menu layout
  const half = Math.ceil(servicesList.length / 2);
  const leftColumn = servicesList.slice(0, half);
  const rightColumn = servicesList.slice(half);

  return (
    <section id="services" className="section services" ref={sectionRef}>
      <div className="services-bg-accent"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={`services-header ${isVisible ? 'fade-in-up' : 'hidden'}`}>
          <h2 className="section-title">Cut & Shave Menu</h2>
          <p className="services-subtitle">Experience traditional grooming with modern expertise. Walk-ins only.</p>
        </div>

        <div className="services-menu-wrapper">
          <div className="services-column">
            {leftColumn.map((service, index) => (
              <div 
                key={index} 
                className={`service-row ${isVisible ? 'fade-in-right' : 'hidden'}`} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-info">
                  <h3 className="service-name">{service.name}</h3>
                </div>
                <div className="service-dots"></div>
                <span className="service-price">{service.price}</span>
              </div>
            ))}
          </div>
          
          <div className="services-divider"></div>

          <div className="services-column">
            {rightColumn.map((service, index) => (
              <div 
                key={index + half} 
                className={`service-row ${isVisible ? 'fade-in-left' : 'hidden'}`} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-info">
                  <h3 className="service-name">{service.name}</h3>
                </div>
                <div className="service-dots"></div>
                <span className="service-price">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
