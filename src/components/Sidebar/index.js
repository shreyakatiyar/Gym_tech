import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import {
  SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,
  SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinkContact,
  SidebarLogoutBtn, SidebarUserGreet,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully.');
    toggle();
    navigate('/');
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkContact to="/about" onClick={toggle}>About</SidebarLinkContact>
          <SidebarLinkContact to="/about#locations" onClick={toggle}>Locations</SidebarLinkContact>
          <SidebarLink as={Link} to="/#memberships" onClick={toggle}>Memberships</SidebarLink>
          <SidebarLink as={Link} to="/#howitworks" onClick={toggle}>How it Works</SidebarLink>
          <SidebarLinkContact to="/contact" onClick={toggle}>Contact</SidebarLinkContact>
        </SidebarMenu>
        <SideBtnWrap>
          {isAuthenticated ? (
            <>
              <SidebarUserGreet>Hi, {user?.name?.split(' ')[0]} 👋</SidebarUserGreet>
              <SidebarLinkContact to="/join" onClick={toggle} style={{ fontSize: '0.95rem', color: '#FF7900' }}>
                My Membership
              </SidebarLinkContact>
              <SidebarLogoutBtn onClick={handleLogout}>Log Out</SidebarLogoutBtn>
            </>
          ) : (
            <SidebarRoute to="/login" onClick={toggle}>Log In</SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
