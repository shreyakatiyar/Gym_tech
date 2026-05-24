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
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Memberships />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
