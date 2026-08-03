import React, { useEffect, useRef, useState } from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Mifrid Xhaferaj',
    text: 'Best barbershop in Oxford. Dimitri always giving quality haircuts. Would highly recommend'
  },
  {
    name: 'Ana Johnson',
    text: 'A huge thanks to Dimitri and the team for the coolest first haircut for our boy! You handled not the easiest and calmest client with utmost patience, kindness and professionalism making it a stress free and a nice experience for all of us!'
  },
  {
    name: 'Nicki Styles',
    text: 'We were passing and decided to pop in as son needed his hair cut. Very glad we did as all working there were friendly and we felt welcome. Highly recommend'
  },
  {
    name: 'Franco Cheung',
    text: 'Very reasonable price and good cut.'
  },
  {
    name: 'Luis Evelio Mosquera Bonilla',
    text: 'Excelente servicio 👍🏻'
  }
];

const Reviews = () => {
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
    <section id="reviews" className="section reviews" ref={sectionRef}>
      <div className="reviews-bg-accent"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={`reviews-header ${isVisible ? 'fade-in-up' : 'hidden'}`}>
          <div className="rating-summary">
            <h2 className="excellent-title">Excellent</h2>
            <div className="rating-stars">★★★★★</div>
            <p className="rating-text">Based on 91 Google Reviews</p>
          </div>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`review-card glass-panel ${isVisible ? 'scale-in' : 'hidden'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="quote-icon">"</div>
              
              <div className="review-content">
                <div className="stars">★★★★★</div>
                <p className="review-text">{review.text}</p>
                <div className="review-footer">
                  <h4 className="review-author">{review.name}</h4>
                  <span className="google-tag">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
