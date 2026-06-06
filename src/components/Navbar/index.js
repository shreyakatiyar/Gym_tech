import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksContact,
  NavLogoutBtn,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const changeNav = () => setScrollNav(window.scrollY >= 80);
    window.addEventListener('scroll', changeNav, { passive: true });
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully.');
    navigate('/');
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>GymTech</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinksContact to="/about">About</NavLinksContact>
            </NavItem>
            <NavItem>
              <NavLinksContact to="/about#locations">Locations</NavLinksContact>
            </NavItem>
            <NavItem>
              <NavLinks to="memberships" smooth duration={500} spy exact="true" offset={-80}>
                Memberships
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="howitworks" smooth duration={500} spy exact="true" offset={-80}>
                How it Works
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksContact to="/contact">Contact</NavLinksContact>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {isAuthenticated ? (
              <>
                <NavLinksContact to="/join" style={{ fontSize: '0.85rem' }}>
                  Hi, {user?.name?.split(' ')[0]}
                </NavLinksContact>
                <NavLogoutBtn onClick={handleLogout}>Log Out</NavLogoutBtn>
              </>
            ) : (
              <NavBtnLink to="/login">Log In</NavBtnLink>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
