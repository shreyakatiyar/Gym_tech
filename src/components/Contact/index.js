import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import FotoLarissa from '../../images/larissa.jpg';
import FotoNathalie from '../../images/nathalie.jpg';
import FotoMurilo from '../../images/murilo.jpg';
import FotoYasmin from '../../images/yasmin.jpg';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../SEO';
import AnimatedSection from '../AnimatedSection';
import {
  Container,
  ContactWrap,
  ContactContainer,
  ContactCard,
  ContactPhoto,
  ContactH2,
  SocialContactContainer,
  SocialMediaLink,
  ContactH1,
  ContactFormSection,
  FormGrid,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitBtn,
  ContactInfoBar,
  ContactInfoItem,
  SectionDivider,
  SubHeading,
} from './ContactElements';

const team = [
  { name: 'Larissa Silva', photo: FotoLarissa, linkedin: 'https://www.linkedin.com/in/larissa-silva-773228100/', github: 'https://github.com/LariCostaSilva/' },
  { name: 'Murilo Mininel', photo: FotoMurilo, linkedin: 'https://www.linkedin.com/in/murilo-rodrigues-259011212/', github: 'https://github.com/muridev017' },
  { name: 'Nathalie Moreira', photo: FotoNathalie, linkedin: 'https://www.linkedin.com/in/nathalie-moreira/', github: 'https://github.com/NathalieMS' },
  { name: 'Yasmin Reis', photo: FotoYasmin, linkedin: 'https://www.linkedin.com/in/yasminreisk/', github: 'https://github.com/yasminreisk' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success('Message sent! We will get back to you within 24 hours.');
      setForm({ name: '', email: '', subject: '', message: '' });
      setSending(false);
    }, 800);
  };

  return (
    <>
      <SEO
        title="Contact GymTech — Get in Touch"
        description="Contact the GymTech team for membership inquiries, support, or partnerships. We are here to help."
        path="/contact"
      />
      <Container>
        <ContactWrap>
          <AnimatedSection>
            <ContactH1>Contact Us</ContactH1>
            <SubHeading>Have a question? We'd love to hear from you.</SubHeading>
          </AnimatedSection>

          <ContactInfoBar>
            <ContactInfoItem><FaEnvelope /> support@gymtech.com</ContactInfoItem>
            <ContactInfoItem><FaPhone /> +1 (800) GYM-TECH</ContactInfoItem>
            <ContactInfoItem><FaMapMarkerAlt /> 350 5th Avenue, New York, NY</ContactInfoItem>
          </ContactInfoBar>

          <AnimatedSection delay={0.1}>
            <ContactFormSection>
              <FormGrid onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="name">Your Name</FormLabel>
                  <FormInput id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                </FormGroup>
                <FormGroup $full>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <FormInput id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Membership inquiry" required />
                </FormGroup>
                <FormGroup $full>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormTextarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." rows={5} required />
                </FormGroup>
                <SubmitBtn type="submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </SubmitBtn>
              </FormGrid>
            </ContactFormSection>
          </AnimatedSection>

          <SectionDivider>
            <span>Meet Our Team</span>
          </SectionDivider>

          <ContactContainer>
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <ContactCard as={motion.div} whileHover={{ scale: 1.05 }}>
                  <ContactPhoto src={member.photo} alt={member.name} loading="lazy" />
                  <ContactH2>{member.name}</ContactH2>
                  <SocialContactContainer>
                    <SocialMediaLink href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin />
                    </SocialMediaLink>
                    <SocialMediaLink href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </SocialMediaLink>
                  </SocialContactContainer>
                </ContactCard>
              </AnimatedSection>
            ))}
          </ContactContainer>
        </ContactWrap>
      </Container>
    </>
  );
};

export default Contact;
