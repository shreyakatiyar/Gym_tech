import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo, homeObjFour } from '../InfoSection/Data';
import Navbar from '../Navbar';
import Memberships from '../Memberships';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import ScrollToHash from '../ScrollToHash';
import SEO from '../SEO';
import StatsSection from '../StatsSection';
import TestimonialsSection from '../TestimonialsSection';
import ClassesSection from '../ClassesSection';
import NewsletterSection from '../NewsletterSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <SEO path="/" />
      <ScrollToHash />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <StatsSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Memberships />
      <ClassesSection />
      <TestimonialsSection />
      <InfoSection {...homeObjFour} />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Home;
