import React, { useState, useRef, useEffect } from 'react';
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

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

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
          poster=""
          onLoadedData={() => setVideoLoaded(true)}
          style={{ opacity: videoLoaded ? 1 : 0.6, transition: 'opacity 0.5s ease' }}
        >
          <source src={require('../../videos/video.mp4')} type="video/mp4" />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>The future to build your best version</HeroH1>
        <HeroP>
          Connecting your body with technology and science for results in record time
        </HeroP>
        <HeroBtnWrapper>
          <JoinNowButton primary dark />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
