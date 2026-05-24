import React from 'react';
import { motion } from 'framer-motion';
import { gymLocations, mapEmbedUrl } from '../../data/locations';
import JoinNowButton from '../JoinNowButton';
import SEO from '../SEO';
import {
  AboutPageContainer,
  AboutHero,
  AboutHeroH1,
  AboutHeroP,
  MissionSection,
  SectionTitle,
  SectionHeading,
  MissionText,
  ValuesGrid,
  ValueCard,
  MapSection,
  MapWrapper,
  MapFrame,
  LocationsGrid,
  LocationCard,
  CtaSection,
} from './AboutElements';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <AboutPageContainer>
      <SEO
        title="About GymTech — Our Mission & Locations"
        description="Learn about GymTech's mission to revolutionize fitness with smart technology. Find your nearest gym location on our interactive map."
        path="/about"
      />

      <AboutHero>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <AboutHeroH1>About GymTech</AboutHeroH1>
          <AboutHeroP>
            We believe fitness should be intelligent, accessible, and personalized.
            GymTech merges cutting-edge technology with world-class training so you
            can become the best version of yourself — faster and smarter.
          </AboutHeroP>
        </motion.div>
      </AboutHero>

      <MissionSection>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <SectionTitle>Our Intention</SectionTitle>
          <SectionHeading>Building the future of fitness</SectionHeading>
          <MissionText>
            GymTech was founded with a clear purpose: to remove the guesswork from fitness.
            Every machine in our studios is equipped with Azure Kinect 3D cameras and real-time
            bio-analytics that track your metabolism, strength, flexibility, and cardio performance.
          </MissionText>
          <MissionText>
            We are not just a gym — we are a learning platform where technology guides your journey.
            Register, train with data-driven insights, and watch your progress unfold in real time.
            Whether you are a beginner or an athlete, GymTech adapts to your body and your goals.
          </MissionText>
        </motion.div>

        <ValuesGrid>
          {[
            { title: 'Smart Technology', desc: 'AI-powered equipment tracks every rep, set, and calorie in real time.' },
            { title: 'Personalized Plans', desc: 'Custom workouts and nutrition based on your unique body composition.' },
            { title: 'Global Access', desc: 'Train at any GymTech studio worldwide with a single membership.' },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.15, duration: 0.6 } } }}
            >
              <ValueCard>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </ValueCard>
            </motion.div>
          ))}
        </ValuesGrid>
      </MissionSection>

      <MapSection id="locations">
        <MapWrapper>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <SectionTitle>Find Us</SectionTitle>
            <SectionHeading>Nearest GymTech Locations</SectionHeading>
            <MissionText>
              We have studios across major cities. Use the map below to find the gym closest to you.
            </MissionText>
            <MapFrame
              title="GymTech locations map"
              src={mapEmbedUrl}
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          <LocationsGrid>
            {gymLocations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.5 } } }}
              >
                <LocationCard>
                  <h4>{loc.name}</h4>
                  <p>{loc.address}</p>
                  <p>{loc.hours}</p>
                  <p>{loc.phone}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions →
                  </a>
                </LocationCard>
              </motion.div>
            ))}
          </LocationsGrid>
        </MapWrapper>
      </MapSection>

      <CtaSection>
        <JoinNowButton primary dark />
      </CtaSection>
    </AboutPageContainer>
  );
};

export default About;
