import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Btn = styled(motion.button)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #FF7900;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(255, 121, 0, 0.45);

  @media screen and (max-width: 480px) {
    bottom: 20px;
    right: 20px;
    width: 42px;
    height: 42px;
    font-size: 15px;
  }
`;

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <Btn
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.12, backgroundColor: '#e56d00' }}
          whileTap={{ scale: 0.92 }}
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </Btn>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopBtn;
