import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import JoinNowButton from '../JoinNowButton';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut', delay },
  }),
};

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.25 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          onLoadedData={() => setVideoLoaded(true)}
          style={{ opacity: videoLoaded ? 1 : 0.5, transition: 'opacity 0.6s ease' }}
        >
          <source src={require('../../videos/video.mp4')} type="video/mp4" />
        </VideoBg>
      </HeroBg>

      <HeroContent>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <HeroH1>The future to build your best version</HeroH1>
        </motion.div>

        <motion.div
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <HeroP>
            Connecting your body with technology and science for results in record time
          </HeroP>
        </motion.div>

        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <HeroBtnWrapper>
            <JoinNowButton primary dark />
          </HeroBtnWrapper>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
