import React from 'react';
import styled from 'styled-components';
import {
  RiGithubFill,
  RiInstagramFill,
  RiKakaoTalkFill,
  RiMailFill,
  RiStackOverflowFill,
} from 'react-icons/ri';
import VerticalCarouselCard from '../../components/carousels/verticalCarousel/VerticalCarouselCard';
import VerticalCarouselInner from '../../components/carousels/verticalCarousel/VerticalCarouselInner';

const Container = styled.div`
  font-weight: ${({ theme }) => (theme.mode === 'light' ? 'bold' : 'normal')};
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  border-radius: 1rem;
  box-shadow: 1px 1px 6px
    ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.sub : theme.colors.black};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    border-radius: 0;
    box-shadow: none;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const InfoGrid = styled.div`
  display: grid;
  width: auto;
  height: auto;
  grid-template-columns: 3rem auto;

  @media (orientation: portrait) {
    grid-template-columns: 3rem auto;
  }
`;

const InfoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;

const InfoDesc = styled.div`
  font-size: 1.2rem;
  display: flex;
  height: 3rem;
  align-items: center;

  > span {
    padding-bottom: 0.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  }

  font-size: 1rem;
`;

const ContactSection = () => {
  return (
    <VerticalCarouselCard>
      <VerticalCarouselInner>
        <Container>
          <Title>Contact Me</Title>
          <InfoGrid>
            <InfoHead>
              <RiMailFill size="2rem" />
            </InfoHead>
            <InfoDesc>
              <span>skaty4870@naver.com</span>
            </InfoDesc>
            <InfoHead>
              <RiKakaoTalkFill size="2rem" />
            </InfoHead>
            <InfoDesc>
              <span>skaty4870</span>
            </InfoDesc>
            <InfoHead>
              <RiInstagramFill size="2rem" />
            </InfoHead>
            <InfoDesc>
              <span>@wongyosuh</span>
            </InfoDesc>
            <InfoHead>
              <RiGithubFill size="2rem" />
            </InfoHead>
            <InfoDesc>
              <span>Shubidumdu</span>
            </InfoDesc>
            <InfoHead>
              <RiStackOverflowFill size="2rem" />
            </InfoHead>
            <InfoDesc>
              <span>user:14672911</span>
            </InfoDesc>
          </InfoGrid>
        </Container>
      </VerticalCarouselInner>
    </VerticalCarouselCard>
  );
};

export default ContactSection;
