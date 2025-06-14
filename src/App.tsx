import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Beta from './pages/Beta/Beta';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';

const App: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 150vh
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setShowNav(scrollPosition > viewportHeight * 0.2);

      // Show scroll to top button when scrolled down
      setShowScrollTop(scrollPosition > viewportHeight);

      // Determine which section is currently in view
      const sections = ['home', 'about', 'basics', 'eq-journey', 'faqs', 'about-me', 'contact-us'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport, set it as active
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to pass activeSection to NavigationHeader
  const renderNavHeader = () => {
    return <NavigationHeader activeSection={activeSection} />;
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div>
      <div className={`nav-container ${showNav ? 'visible' : 'hidden'}`}>
        {renderNavHeader()}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/beta" element={<Beta />} />
      </Routes>
      {showScrollTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default App;
