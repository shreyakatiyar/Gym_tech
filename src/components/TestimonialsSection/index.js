import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Container = styled.section`
  background: #0d0d0d;
  padding: 100px 24px;

  @media screen and (max-width: 768px) {
    padding: 72px 16px;
  }
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
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
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 56px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 36px;
  }
`;

const Card = styled.div`
  background: #141414;
  border: 1px solid #252525;
  border-radius: 20px;
  padding: 52px 48px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    padding: 36px 20px;
    min-height: 260px;
  }
`;

const QuoteIcon = styled.div`
  color: #FF7900;
  font-size: 1.8rem;
  margin-bottom: 20px;
  opacity: 0.9;
`;

const Stars = styled.div`
  color: #FF7900;
  display: flex;
  gap: 4px;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1rem;
`;

const QuoteText = styled.p`
  color: #ccc;
  font-size: 1.05rem;
  line-height: 1.85;
  margin-bottom: 28px;
  max-width: 640px;

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Author = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
`;

const AuthorRole = styled.div`
  color: #666;
  font-size: 0.85rem;
  margin-top: 4px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const NavBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #333;
  background: transparent;
  color: #aaa;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #FF7900;
    color: #FF7900;
    background: rgba(255, 121, 0, 0.08);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? '#FF7900' : '#333')};
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease, transform 0.2s ease;
  transform: ${({ $active }) => ($active ? 'scale(1.3)' : 'scale(1)')};
`;

const TESTIMONIALS = [
  {
    text: "GymTech completely transformed my fitness journey. The real-time bio-analytics showed me exactly what was working and what wasn't. I've lost 25 lbs in 4 months and feel stronger than ever!",
    author: 'Marcus Johnson',
    role: 'Diamond Member · 2 Years',
    stars: 5,
  },
  {
    text: "The Azure Kinect tracking is mind-blowing. Every rep is measured perfectly and my personalized meal plan has made a huge difference in my energy levels throughout the day.",
    author: 'Sarah Williams',
    role: 'Platinum Member · 1 Year',
    stars: 5,
  },
  {
    text: "I was skeptical about smart gyms, but GymTech proved me wrong. The staff is incredible and the technology genuinely helps you push harder. Best investment I have ever made in my health.",
    author: 'David Chen',
    role: 'Gold Member · 6 Months',
    stars: 5,
  },
  {
    text: "As a busy professional, I love how efficient GymTech makes my workouts. The 22 pre-built programs mean I always know exactly what to do the moment I walk in.",
    author: 'Emma Rodriguez',
    role: 'Gold Member · 8 Months',
    stars: 5,
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (delta) => {
    setDir(delta);
    setIndex((prev) => (prev + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <Container>
      <Inner>
        <SectionLabel>What Members Say</SectionLabel>
        <Title>Real results, real people</Title>

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: 'easeInOut' }}
          >
            <Card>
              <QuoteIcon><FaQuoteLeft /></QuoteIcon>
              <Stars>
                {Array.from({ length: t.stars }, (_, i) => <FaStar key={i} />)}
              </Stars>
              <QuoteText>{t.text}</QuoteText>
              <Author>{t.author}</Author>
              <AuthorRole>{t.role}</AuthorRole>
            </Card>
          </motion.div>
        </AnimatePresence>

        <Controls>
          <NavBtn onClick={() => go(-1)} aria-label="Previous testimonial">
            <FaChevronLeft />
          </NavBtn>
          <Dots>
            {TESTIMONIALS.map((_, i) => (
              <Dot
                key={i}
                $active={i === index}
                onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </Dots>
          <NavBtn onClick={() => go(1)} aria-label="Next testimonial">
            <FaChevronRight />
          </NavBtn>
        </Controls>
      </Inner>
    </Container>
  );
};

export default TestimonialsSection;
