import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
`
export const CloseIcon = styled(FaTimes)` 
    color: #fff;
`

export const Icon = styled.div` 
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 72px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(5, 60px);
}
`;


export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
text-decoration: none;

&:hover{
    color: #ff7900;
    transition: 0.2s ease-in-out;

}
`
export const SidebarLinkContact = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
text-decoration: none;

&:hover{
    color: #ff7900;
    transition: 0.2s ease-in-out;

}
`

export const SideBtnWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #ff7900;
white-space: nowrap;
padding: 14px 56px;
color: #010606;
font-size: 16px;
font-weight: 700;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    background: #fff;
    color: #010606;
}
`

export const SidebarLogoutBtn = styled.button`
border-radius: 50px;
background: transparent;
border: 2px solid #ff7900;
white-space: nowrap;
padding: 12px 48px;
color: #ff7900;
font-size: 16px;
font-family: inherit;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
    background: #ff7900;
    color: #010606;
}
`

export const SidebarUserGreet = styled.span`
color: #bbb;
font-size: 1rem;
text-align: center;
`