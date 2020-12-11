import React from 'react';
import styled from 'styled-components';
import { Card } from '../VerticalCarousel';
import mainImg from '../../../resources/images/profile5.png';

const ImgWrap = styled.div`
  height: 70%;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;

  @media (max-width: 425px) {
    width: 100%;
    height: auto;
  }
`;

const MainImg = styled.img`
  /* width: 100%; */
  height: 100%;
  width: auto;

  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;

  @media (max-width: 425px) {
    padding: 0;
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

  @media (max-width: 425px) {
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
  font-weight: 200;
  font-size: 1rem;

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const LargeTitle = styled.div`
  font-weight: 100;
  font-size: 2rem;

  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

const Profile = () => {
  return (
    <Card>
      <Inner>
        <Container>
          <IntroWrap>
            <LargeTitle>안녕하세요</LargeTitle>
            <MediumTitle>
              개성과 발전을 중요시하는 개발자 서원교입니다
            </MediumTitle>
          </IntroWrap>
          <ImgWrap>
            <MainImg src={mainImg} />
          </ImgWrap>
        </Container>
      </Inner>
    </Card>
  );
};

export default Profile;
