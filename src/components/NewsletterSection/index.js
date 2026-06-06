import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Container = styled.section`
  background: linear-gradient(135deg, #FF7900 0%, #e56000 100%);
  padding: 80px 24px;

  @media screen and (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Inner = styled.div`
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 14px;
  line-height: 1.25;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Sub = styled.p`
  color: rgba(255, 255, 255, 0.88);
  font-size: 1rem;
  margin-bottom: 36px;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  gap: 12px;
  max-width: 480px;
  margin: 0 auto;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 14px 18px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  background: rgba(255, 255, 255, 0.95);
  color: #010606;

  &::placeholder {
    color: #999;
  }

  &:focus {
    background: #fff;
    box-shadow: 0 0 0 3px rgba(255,255,255,0.4);
  }
`;

const Btn = styled.button`
  padding: 14px 28px;
  border: 2px solid #fff;
  border-radius: 8px;
  background: transparent;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    color: #FF7900;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

const Note = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  margin-top: 16px;
`;

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      toast.success('You are subscribed! Welcome to the GymTech community.');
      setEmail('');
      setLoading(false);
    }, 700);
  };

  return (
    <Container>
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Stay ahead of your fitness goals</Title>
          <Sub>
            Get workout tips, nutrition insights, and exclusive GymTech offers
            delivered straight to your inbox. No spam, unsubscribe anytime.
          </Sub>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email for newsletter"
            />
            <Btn type="submit" disabled={loading}>
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Btn>
          </Form>
          <Note>Join 15,000+ members already in the community.</Note>
        </motion.div>
      </Inner>
    </Container>
  );
};

export default NewsletterSection;
