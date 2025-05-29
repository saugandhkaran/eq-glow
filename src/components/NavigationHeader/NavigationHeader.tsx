import React, { useState, useEffect, useRef } from 'react';
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
    }
  };

  return (
    <nav className={`navbar is-fixed-top ${activationClass}`}>
      <div className="navbar-brand">
        <a className={`navbar-item ${activeSection === 'home' ? 'is-active' : ''}`} 
           href="#" 
           onClick={(e) => handleNavClick(e, 'home')}>
          <strong className='brand'>the feel coach</strong>
        </a>
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
          <a href="#about" 
             className={`navbar-item ${activeSection === 'about' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'about')}>
            about
          </a>
          <a href="#basics" 
             className={`navbar-item ${activeSection === 'basics' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'basics')}>
            basics
          </a>
          <a href="#eq-journey" 
             className={`navbar-item ${activeSection === 'eq-journey' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'eq-journey')}>
            flow journey
          </a>
          <a href="#faqs" 
             className={`navbar-item ${activeSection === 'faqs' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'faqs')}>
            faqs
          </a>
          <a href="#about-me" 
             className={`navbar-item ${activeSection === 'about-me' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'about-me')}>
            about me
          </a>
          <a href="#contact-us" 
             className={`navbar-item ${activeSection === 'contact-us' ? 'is-active' : ''}`} 
             onClick={(e) => handleNavClick(e, 'contact-us')}>
            contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
