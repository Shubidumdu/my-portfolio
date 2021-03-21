import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Card, Inner } from '../VerticalCarousel';
import mainImgLight from '../../../resources/images/profile5.png';
import mainImgDark from '../../../resources/images/profile1.png';

const ImgWrap = styled.div`
  height: 70%;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s;

  @media (max-width: 550px) {
    width: 85%;
    height: auto;
  }
`;

const MainImg = styled.img`
  /* width: 100%; */
  height: 100%;
  width: auto;

  @media (max-width: 550px) {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
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

  @media (max-width: 550px) {
    border-radius: 0;
    box-shadow: none;
  }
`;

const IntroWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MediumTitle = styled.div`
  font-weight: 300;
  font-size: 1rem;

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const LargeTitle = styled.div`
  font-weight: 300;
  font-size: 2rem;

  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

const Home = () => {
  const themeMode = useTheme().mode;

  return (
    <Card>
      <Inner>
        <Container>
          <IntroWrap>
            <LargeTitle>안녕하세요</LargeTitle>
            <MediumTitle>
              트렌드와 발전을 중요시하는 개발자 서원교입니다
            </MediumTitle>
          </IntroWrap>
          <ImgWrap>
            {themeMode === 'light' ? (
              <MainImg src={mainImgLight} />
            ) : (
              <MainImg src={mainImgDark} />
            )}
          </ImgWrap>
        </Container>
      </Inner>
    </Card>
  );
};

export default Home;
