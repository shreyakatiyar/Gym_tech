import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../images/contact_background.jpg'


export const Container = styled.div`
min-height: 840px;
/* position: fixed; */
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
/* overflow: hidden; */
background-image: url(${background});
background-size: 100% 150%;

@media screen and (max-width: 768px) {
    background-size: cover;
    }

`;

export const ContactWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-widht: 400px){
    height: 80%;
}
`;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color:#ff4800;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const ContactContainer = styled.div` 
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 48px;
    /* padding: 0 50px; */

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const ContactCard = styled.div` 
/* background: #0E1527; */

/* background: linear-gradient(325deg, rgba(255,72,0,0.5357493339132529) 0%, rgba(255,121,0,0.54) 35%, rgba(255,170,0,0.54) 100%); */

margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    height: 380px;
    padding: 40px;
    transition: all 0.2s ease-in-out;
    


    &:hover {

        transform: scale(1.1);
        transition: all 0.2s ease-in-out;

    }

    &:hover h2{

        color:#ff4800;
    }
`;

export const ContactPhoto = styled.img` 
    height: 160px;
    width: 160px;
    border-radius: 50%;
    margin-bottom: 10px;

`;
export const ContactH1 = styled.h1` 
display:flex;
flex-direction: column;
align-items: center;
margin-top: 120px;
    font-size: 2.8rem;
    color: #fff;
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const SubHeading = styled.p`
    text-align: center;
    color: #ccc;
    font-size: 1.1rem;
    margin-bottom: 32px;
`;

export const ContactInfoBar = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 48px;
    padding: 0 24px;
`;

export const ContactInfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #f7f8fa;
    font-size: 0.95rem;

    svg {
        color: #ff4800;
        font-size: 18px;
    }
`;

export const ContactFormSection = styled.div`
    max-width: 700px;
    margin: 0 auto 64px;
    padding: 0 24px;
`;

export const FormGrid = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const FormGroup = styled.div`
    grid-column: ${({ $full }) => ($full ? '1 / -1' : 'auto')};
`;

export const FormLabel = styled.label`
    display: block;
    color: #f7f8fa;
    font-size: 0.9rem;
    margin-bottom: 8px;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 14px 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    font-size: 1rem;
    box-sizing: border-box;

    &::placeholder { color: rgba(255, 255, 255, 0.4); }
    &:focus { outline: none; border-color: #ff4800; }
`;

export const FormTextarea = styled.textarea`
    width: 100%;
    padding: 14px 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    font-size: 1rem;
    resize: vertical;
    box-sizing: border-box;
    font-family: inherit;

    &::placeholder { color: rgba(255, 255, 255, 0.4); }
    &:focus { outline: none; border-color: #ff4800; }
`;

export const SubmitBtn = styled.button`
    grid-column: 1 / -1;
    background: #ff4800;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 16px;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s ease;

    &:hover { background: #e04000; }
    &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const SectionDivider = styled.div`
    text-align: center;
    margin: 48px 0 32px;
    position: relative;

    span {
        color: #fff;
        font-size: 1.6rem;
        background: transparent;
        padding: 0 24px;
        position: relative;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 10%;
        right: 10%;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        z-index: 0;
    }
`;

export const ContactH2 = styled.h2` 
    font-size: 1.6rem;
    text-align: center;
    color: #f7f8fa;
    margin-top: 18px;
    margin-bottom: 10px;
`;

export const SocialContactContainer = styled.div` 

    padding: 10px 0;
    display: flex;
    flex-direction: row;
    gap: 18px;
    justify-content: space-evenly;

`;


export const SocialMediaLink = styled.a` 
    color: #f7f8fa;
    font-size: 32px;

    &:hover{
        color: #ff4800;
    }
`;



