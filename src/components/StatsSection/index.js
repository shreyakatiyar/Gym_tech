import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaMapMarkerAlt, FaMedal, FaHeart } from 'react-icons/fa';

const Container = styled.section`
  background: #0a0a0a;
  padding: 80px 24px;
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 36px 16px;
  background: #111;
  border: 1px solid #222;
  border-radius: 16px;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: #FF7900;
    transform: translateY(-4px);
  }
`;

const IconWrap = styled.div`
  color: #FF7900;
  font-size: 2rem;
  margin-bottom: 16px;
`;

const StatNum = styled.h3`
  font-size: 2.4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
  line-height: 1;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const StatLabel = styled.p`
  color: #888;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
`;

const STATS = [
  { icon: <FaUsers />, value: 15000, suffix: '+', label: 'Active Members' },
  { icon: <FaMapMarkerAlt />, value: 50, suffix: '+', label: 'Global Locations' },
  { icon: <FaMedal />, value: 15, suffix: ' Yrs', label: 'Experience' },
  { icon: <FaHeart />, value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

function useCountUp(target, duration, run) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!run) return;
    const step = target / (duration / 16);
    let cur = 0;
    const id = setInterval(() => {
      cur += step;
      if (cur >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(cur));
      }
    }, 16);
    return () => clearInterval(id);
  }, [target, duration, run]);
  return count;
}

const StatItem = ({ icon, value, suffix, label, delay }) => {
  const [run, setRun] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(value, 1800, run);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRun(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
    >
      <StatBox>
        <IconWrap>{icon}</IconWrap>
        <StatNum>
          {count.toLocaleString()}{suffix}
        </StatNum>
        <StatLabel>{label}</StatLabel>
      </StatBox>
    </motion.div>
  );
};

const StatsSection = () => (
  <Container>
    <Inner>
      {STATS.map((s, i) => (
        <StatItem key={s.label} {...s} delay={i * 0.1} />
      ))}
    </Inner>
  </Container>
);

export default StatsSection;
