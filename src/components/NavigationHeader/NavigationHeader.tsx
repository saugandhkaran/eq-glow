import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavigationHeader.scss';

interface NavigationHeaderProps {
  activeSection?: string;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({ activeSection = 'home' }) => {
  const [isActive, setIsActive] = useState(false);
  const prevActiveSectionRef = useRef(activeSection);
  const [activationClass, setActivationClass] = useState('');

  // Effect for section change animation
  useEffect(() => {
    if (prevActiveSectionRef.current !== activeSection) {
      setActivationClass('section-changed');
      const timer = setTimeout(() => {
        setActivationClass('');
      }, 1000);
      prevActiveSectionRef.current = activeSection;
      return () => clearTimeout(timer);
    }
  }, [activeSection]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  
  const closeMenu = () => {
    setIsActive(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Offset to account for the navbar height
        behavior: 'smooth'
      });
    } else {
      // Use the React Router approach for navigation between pages
      window.location.href = `/${targetId === 'home' ? '' : 'home'}#${targetId}`;
    }
  };

  return (
    <nav className={`navbar ${activationClass}`}>
      <div className="navbar-brand">
        <Link style={{color: 'white'}} className={`navbar-item ${activeSection === 'home' ? 'is-active' : ''}`} 
           to="/" 
           onClick={(e) => handleNavClick(e, 'home')}>
          <strong className='brand'>the feel coach</strong>
        </Link>
        <span 
          className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
          data-target="navbarMenu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link to="/#about" 
             className={`navbar-item ${activeSection === 'about' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'about')}>
            About
          </Link>
          <Link to="/#basics" 
             className={`navbar-item ${activeSection === 'basics' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'basics')}>
            Basics
          </Link>
          <Link to="/#eq-journey" 
             className={`navbar-item ${activeSection === 'eq-journey' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'eq-journey')}>
            Flow Journey
          </Link>
          <Link to="/#faqs" 
             className={`navbar-item ${activeSection === 'faqs' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'faqs')}>
            FAQs
          </Link>
          <Link to="/#about-me" 
             className={`navbar-item ${activeSection === 'about-me' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'about-me')}>
            About Me
          </Link>
          <Link to="/#contact-us" 
             className={`navbar-item ${activeSection === 'contact-us' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'contact-us')}>
            Contact
          </Link>
          <Link to="/beta" className="navbar-item" onClick={closeMenu}>
            Beta
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
