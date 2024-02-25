import "./Header.css";

import me from './images/me.jpg'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when the screen size changes to desktop
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  // Add a resize event listener to handle the screen size change
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <img className="header-img" src={me} alt='Profile IMG'></img>
        <div>
          <p className="header-name">Ricky Allen Moore Jr.</p>
          <p className="header-title">Full-Stack Developer</p>
        </div>
        <i class="fa-solid fa-bars fa-2xl"></i>
      </div>
    </header>
  )
};

export default Header;
