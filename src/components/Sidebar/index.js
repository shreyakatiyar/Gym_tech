import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinkContact } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
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
          <SidebarRoute to="/login" onClick={toggle}>Log In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
