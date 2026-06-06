import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #101522;
`;

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
max-width: 1100px;
margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;

@media screen and (max-width: 820px) {
    padding-top: 16px;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 0 40px;

@media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 0;
}
`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px 0;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 480px) {
    margin: 0;
    padding: 10px 0;
    width: 100%;
}
`;

export const FooterLinkTitle = styled.h2`
font-size: 14px;
font-weight: 700;
margin-bottom: 16px;
color: #fff;
text-transform: uppercase;
letter-spacing: 1px;
`

export const FooterLink = styled(Link)`
color: #aaa;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
transition: color 0.2s ease;

&:hover {
    color: #FF7900;
}
`;

export const SocialMedia = styled.section`
    max-width: 1100px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        gap: 16px;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #888;
    margin-bottom: 16px;
    font-size: 13px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`;

export const SocialIconLink = styled.a`
    color: #aaa;
    font-size: 22px;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
        color: #FF7900;
        transform: translateY(-2px);
    }
`;
