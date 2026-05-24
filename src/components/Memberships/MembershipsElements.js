import styled from 'styled-components';
import { BsCheckLg, BsCurrencyDollar } from 'react-icons/bs';

export const MembershipsContainer = styled.div`  
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1000px) {
        height: 1800px;
    }

    @media screen and (max-width: 480px) {
        height: 1800px;
    }
`;

export const MembershipsWrapper = styled.div` 
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const MembershipsCard = styled.div` 
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    height: 520px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    position: relative;
    cursor: pointer;
    border: ${({ $popular }) => ($popular ? '2px solid #FF7900' : '2px solid transparent')};

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 24px rgba(255, 121, 0, 0.2);
    }
`;
export const MembershipsChecks = styled.div` 
    min-height: 240px;
    padding: 10px 0;
`;

export const MembershipsIcon = styled.img` 
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const MembershipsH1 = styled.h1` 
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {

        text-align: center;
    }


    @media screen and (max-width: 480px) {

        font-size: 2rem;
    }
    `;

export const MembershipsH2 = styled.h2` 
    font-size: 1.2rem;
    margin-top: 18px;
    margin-bottom: 10px;
`;

export const MembershipsP = styled.p` 
    font-size: 1rem;
    text-align: center;
    padding-top: 5px;
`;

export const CheckMark = styled(BsCheckLg)` 
    margin-right: 8px;
    font-size: 16px;
    color: #FF7900;
    `;

export const DollarSign = styled(BsCurrencyDollar)` 
    margin-right: 8px;
    font-size: 1.2rem;
    color: #FF7900;
    `;

export const PopularBadge = styled.span`
    position: absolute;
    top: -12px;
    background: #FF7900;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 4px 16px;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const SelectBtn = styled.button`
    background: #010606;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 10px 28px;
    font-size: 0.9rem;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s ease;

    &:hover {
        background: #FF7900;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 24px;
`;

export const ModalContent = styled.div`
    background: #111;
    border: 1px solid #333;
    border-radius: 16px;
    padding: 40px;
    max-width: 480px;
    width: 100%;
    position: relative;
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 16px;
    right: 20px;
    background: none;
    border: none;
    color: #888;
    font-size: 28px;
    cursor: pointer;
    line-height: 1;

    &:hover { color: #fff; }
`;

export const ModalTitle = styled.h2`
    color: #fff;
    font-size: 1.8rem;
    margin-bottom: 8px;
`;

export const ModalPrice = styled.div`
    color: #FF7900;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 24px;
    display: flex;
    align-items: center;

    span {
        font-size: 1rem;
        color: #888;
        margin-left: 4px;
        font-weight: 400;
    }
`;

export const ModalFeatures = styled.div`
    margin-bottom: 32px;

    p {
        color: #ccc;
        font-size: 0.95rem;
        margin-bottom: 10px;
        display: flex;
        align-items: flex-start;
    }
`;

export const ModalActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ModalBtnPrimary = styled.button`
    background: #FF7900;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 14px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;

    &:hover { background: #e56d00; }
`;

export const ModalBtnSecondary = styled.button`
    background: transparent;
    color: #FF7900;
    border: 1px solid #FF7900;
    border-radius: 8px;
    padding: 14px;
    font-size: 1rem;
    cursor: pointer;

    &:hover { background: rgba(255, 121, 0, 0.1); }
`; 
