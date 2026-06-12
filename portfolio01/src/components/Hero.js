import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img
          src="/profile.jpg"
          alt="Sadisha Viraj"
          className="hero-photo"
        />
        <div className="hero-text">
          <h1>Sadisha Viraj</h1>
          <h2>Full-Stack Software Developer</h2>
          <p>Building robust microservices, IoT systems, and secure applications.</p>
          <a href="#projects">
            <button className="hero-btn">View Projects ↓</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
