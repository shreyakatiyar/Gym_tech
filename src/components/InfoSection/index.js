import React from 'react';
import JoinNowButton from '../JoinNowButton';
import AnimatedSection from '../AnimatedSection';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark2,
  dark,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <AnimatedSection direction={imgStart ? 'right' : 'left'}>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <JoinNowButton
                    primary={primary}
                    dark={dark}
                    dark2={dark2}
                  >
                    {buttonLabel}
                  </JoinNowButton>
                </BtnWrap>
              </TextWrapper>
            </AnimatedSection>
          </Column1>
          <Column2>
            <AnimatedSection direction={imgStart ? 'left' : 'right'} delay={0.2}>
              <ImgWrap>
                <Img src={img} alt={alt} loading="lazy" />
              </ImgWrap>
            </AnimatedSection>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
