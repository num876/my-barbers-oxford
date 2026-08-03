import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

// Import all the moved images
import img1 from '../assets/images/unnamed.webp';
import img2 from '../assets/images/unnamed (1).webp';
import img3 from '../assets/images/unnamed (2).webp';
import img4 from '../assets/images/unnamed (3).webp';
import img5 from '../assets/images/unnamed (4).webp';
import img6 from '../assets/images/unnamed (5).webp';
import img7 from '../assets/images/unnamed (6).webp';

const images = [img1, img2, img3, img4, img5, img6, img7];

const Gallery = () => {
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

  return (
    <section id="gallery" className="section gallery" ref={sectionRef}>
      <div className="container">
        <div className={`gallery-header ${isVisible ? 'fade-in-up' : 'hidden'}`}>
          <h2 className="section-title">Our <span className="gold-text">Results</span></h2>
          <p className="gallery-subtitle">Precision, craft, and style. Browse some of our recent work.</p>
        </div>

        <div className="gallery-masonry">
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`gallery-item ${isVisible ? 'scale-in' : 'hidden'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img src={src} alt={`Haircut result ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
