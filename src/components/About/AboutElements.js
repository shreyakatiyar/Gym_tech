import styled from 'styled-components';

export const AboutPageContainer = styled.div`
  min-height: 100vh;
  background: #010606;
  padding-top: 80px;
`;

export const AboutHero = styled.section`
  background: linear-gradient(135deg, #010606 0%, #1a1a2e 50%, #16213e 100%);
  padding: 80px 24px;
  text-align: center;
`;

export const AboutHeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutHeroP = styled.p`
  color: #ccc;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 32px;
  line-height: 1.8;
`;

export const MissionSection = styled.section`
  padding: 80px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  color: #ff7900;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

export const SectionHeading = styled.h3`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 24px;
`;

export const MissionText = styled.p`
  color: #aaa;
  font-size: 1.1rem;
  line-height: 1.9;
  margin-bottom: 20px;
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 32px 24px;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #ff7900;
  }

  h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 12px;
  }

  p {
    color: #888;
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

export const MapSection = styled.section`
  padding: 80px 24px;
  background: #0a0a0a;
`;

export const MapWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
  border-radius: 12px;
  margin-top: 32px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
`;

export const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 48px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LocationCard = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 28px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #ff7900;
  }

  h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  p {
    color: #888;
    font-size: 0.95rem;
    margin-bottom: 6px;
  }

  a {
    color: #ff7900;
    text-decoration: none;
    font-size: 0.9rem;
    margin-top: 12px;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CtaSection = styled.div`
  text-align: center;
  padding: 60px 24px 100px;
`;
