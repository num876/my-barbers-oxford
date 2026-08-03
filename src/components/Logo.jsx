import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="premium-logo">
      <svg className="logo-svg" viewBox="0 0 100 100" width="60" height="60">
        <defs>
          <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9d976" />
            <stop offset="50%" stopColor="#e9c450" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
        
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.3" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.3" />
        
        {/* Circular Text */}
        <text className="logo-circle-text">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            MY BARBERS OXFORD • EST. 2019 • 
          </textPath>
        </text>

        {/* Central Monogram */}
        <text x="50" y="58" className="logo-monogram" textAnchor="middle">
          MB
        </text>
      </svg>
      <div className="logo-text-side">
        <span className="logo-title-side">MY BARBERS</span>
        <span className="logo-subtitle-side">OXFORD</span>
      </div>
    </div>
  );
};

export default Logo;
