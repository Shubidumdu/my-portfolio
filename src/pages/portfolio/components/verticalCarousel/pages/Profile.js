import React from 'react';
import styled from 'styled-components';
import { Card, Inner } from '../VerticalCarousel';
import profilImg from '../../../resources/images/profile2.png';
import { Button } from 'antd';
import { SiGithub, SiStackoverflow } from 'react-icons/si';

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
  align-items: center;
  justify-content: center;

  @media (max-width: 550px) {
    border-radius: 0;
    box-shadow: none;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 16rem;
  height: auto;
  border: 10px solid
    ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  box-shadow: -20px 20px 1px ${({ theme }) => theme.colors.main};

  @media (orientation: portrait) {
    flex-direction: column;
    border: none;
    box-shadow: 6px 6px 1px ${({ theme }) => theme.colors.main};
    width: 40%;
    height: auto;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (orientation: portrait) {
    margin-top: 2rem;
    width: 100%;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  width: 32rem;
  height: auto;
  grid-template-columns: 30% auto;

  @media (orientation: portrait) {
    width: 100%;
    grid-template-columns: 30% auto;
  }
`;

const InfoHead = styled.div`
  font-size: 1rem;
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

  @media (max-width: 550px) {
    font-size: 1rem;

    & > span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;

    & > span {
      font-size: 0.7rem;
    }
  }
`;

const LinkWrap = styled.div`
  @media (orientation: portrait) {
    width: 100%;
  }
`;

const LinkButton = styled(Button)`
  width: 4rem;
  height: 4rem;
`;

const Profile = () => {
  return (
    <Card>
      <Inner>
        <Container>
          <ImgContainer>
            <ProfileImg src={profilImg} />
          </ImgContainer>
          <InfoWrap>
            <InfoGrid>
              <InfoHead>이름</InfoHead>
              <InfoDesc>서원교</InfoDesc>
              <InfoHead>생년월일</InfoHead>
              <InfoDesc>95.08.12</InfoDesc>
              <InfoHead>거주</InfoHead>
              <InfoDesc>서울특별시 관악구</InfoDesc>
              <InfoHead>이메일</InfoHead>
              <InfoDesc>skaty4870@naver.com</InfoDesc>
              <InfoHead>학력</InfoHead>
              <InfoDesc>
                <span>국민대학교 빅데이터경영통계 심화전공</span>
              </InfoDesc>
              <InfoHead></InfoHead>
              <InfoDesc>
                <span>국민대학교 소프트웨어 부전공</span>
              </InfoDesc>
              <InfoHead>계정</InfoHead>
              <LinkWrap>
                <LinkButton type="link">
                  <SiGithub size="100%" />
                </LinkButton>
                <LinkButton type="link">
                  <SiStackoverflow size="100%" />
                </LinkButton>
              </LinkWrap>
            </InfoGrid>
          </InfoWrap>
        </Container>
      </Inner>
    </Card>
  );
};

export default Profile;
