import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaDumbbell, FaRunning, FaHeartbeat, FaYinYang,
  FaBiking, FaSwimmer,
} from 'react-icons/fa';

const Container = styled.section`
  background: #f9f9f9;
  padding: 100px 24px;

  @media screen and (max-width: 768px) {
    padding: 72px 16px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const SectionLabel = styled.p`
  color: #FF7900;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const Title = styled.h2`
  color: #010606;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Sub = styled.p`
  color: #555;
  font-size: 1.05rem;
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  padding: 36px 24px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  border: 2px solid transparent;
  cursor: default;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: #FF7900;
  }

  @media screen and (max-width: 520px) {
    padding: 24px 14px;
  }
`;

const IconWrap = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 121, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.6rem;
  color: #FF7900;
  transition: background 0.25s ease;

  ${Card}:hover & {
    background: #FF7900;
    color: #fff;
  }
`;

const CardTitle = styled.h3`
  color: #010606;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (max-width: 520px) {
    font-size: 0.95rem;
  }
`;

const CardDesc = styled.p`
  color: #777;
  font-size: 0.9rem;
  line-height: 1.6;

  @media screen and (max-width: 520px) {
    font-size: 0.82rem;
  }
`;

const CLASSES = [
  {
    icon: <FaDumbbell />,
    title: 'Strength Training',
    desc: 'AI-guided weight programs that adapt to your strength gains in real time.',
  },
  {
    icon: <FaRunning />,
    title: 'HIIT Cardio',
    desc: 'High-intensity interval sessions calibrated to your heart rate zones.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Functional Fitness',
    desc: 'Full-body movement patterns tracked with 3D motion capture technology.',
  },
  {
    icon: <FaYinYang />,
    title: 'Yoga & Flexibility',
    desc: 'Guided flexibility sessions with posture correction feedback from Kinect.',
  },
  {
    icon: <FaBiking />,
    title: 'Cycling',
    desc: 'Smart bikes that sync your cadence, power, and performance metrics live.',
  },
  {
    icon: <FaSwimmer />,
    title: 'Aqua Training',
    desc: 'Pool workouts designed by our scientists for low-impact, high-reward results.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: 'easeOut' },
  }),
};

const ClassesSection = () => (
  <Container id="classes">
    <Inner>
      <Header>
        <SectionLabel>What We Offer</SectionLabel>
        <Title>Classes for every goal</Title>
        <Sub>
          Every session is tracked, analysed, and personalised. Choose your discipline
          — GymTech's smart technology does the rest.
        </Sub>
      </Header>

      <Grid>
        {CLASSES.map((cls, i) => (
          <Card
            key={cls.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -6 }}
          >
            <IconWrap>{cls.icon}</IconWrap>
            <CardTitle>{cls.title}</CardTitle>
            <CardDesc>{cls.desc}</CardDesc>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Container>
);

export default ClassesSection;
