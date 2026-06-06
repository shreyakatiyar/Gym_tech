import React, { useState } from 'react';
import About from '../About';
import ScrollToTop from '../ScrollToTop';
import ScrollToHash from '../ScrollToHash';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import NewsletterSection from '../NewsletterSection';

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <ScrollToHash />
      <About />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default AboutPage;
