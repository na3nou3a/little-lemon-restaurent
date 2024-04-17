import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './scrollToTop.css';

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <>{showTopBtn && <FaAngleUp className="scroll-icon" onClick={goToTop} />}</>;
}

export default ScrollToTop;
