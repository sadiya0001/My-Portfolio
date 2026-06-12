import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    function handleScroll() {
      const sections = ['home', 'skills', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(sections[i]);
          break;
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">Sadiya</span>
        <div className="nav-links">
          <a href="#home" className={active === 'home' ? 'active' : ''}>Home</a>
          <a href="#skills" className={active === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" className={active === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#contact" className={active === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
