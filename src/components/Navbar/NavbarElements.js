import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'rgba(1,6,6,0.97)' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: background 0.35s ease;
    backdrop-filter: ${({ scrollNav }) => (scrollNav ? 'blur(8px)' : 'none')};
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1px;
    transition: color 0.2s ease;

    &:hover {
        color: #FF7900;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #FF7900;
    }

    &.active {
        border-bottom: 3px solid #FF7900;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavLinksContact = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #FF7900;
    }

    &.active {
        border-bottom: 3px solid #FF7900;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #FF7900;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: #fff;
        color: #010606;
    }
`

export const NavLogoutBtn = styled.button`
    border-radius: 50px;
    background: transparent;
    border: 1px solid #FF7900;
    white-space: nowrap;
    padding: 8px 18px;
    color: #fff;
    font-size: 14px;
    font-family: inherit;
    cursor: pointer;
    margin-left: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #FF7900;
        color: #010606;
    }
`
