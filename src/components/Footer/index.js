import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Franchises</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Privacy Policy</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Membership</FooterLinkTitle>
              <FooterLink to='/'>Gold Plan</FooterLink>
              <FooterLink to='/'>Platinum Plan</FooterLink>
              <FooterLink to='/'>Diamond Plan</FooterLink>
              <FooterLink to='/'>Corporate Plans</FooterLink>
              <FooterLink to='/'>Student Discount</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Support</FooterLinkTitle>
              <FooterLink to='/contact'>Contact Us</FooterLink>
              <FooterLink to='/'>FAQs</FooterLink>
              <FooterLink to='/'>App Download</FooterLink>
              <FooterLink to='/about#locations'>Find a Gym</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={() => scroll.scrollToTop()}>
              GymTech
            </SocialLogo>
            <WebsiteRights>GymTech © {new Date().getFullYear()} | All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="//twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/shreyakatiyar/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
