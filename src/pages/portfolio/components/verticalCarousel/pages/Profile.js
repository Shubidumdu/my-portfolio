import React from 'react';
import styled from 'styled-components';
import { Card } from '../VerticalCarousel';
import mainImg from '../../../resources/images/profile.png';

const MainImg = styled.img`
  height: 100%;
  width: auto;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  border-radius: 1rem;
  box-shadow: 1px 1px 6px
    ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.sub : theme.colors.black};
`;

const IntroWrap = styled.div``;

const MainTitle = styled.main`
  width: 100%;
  height: 100%;
`;

const MiniTitle = styled.div``;

const LargeTitle = styled.div``;

const Profile = () => {
  return (
    <Card>
      <Inner>
        <Container>
          <MainImg src={mainImg} />
          <IntroWrap>
            <MainTitle>
              <MiniTitle>안녕하세요. 저는</MiniTitle>
              <LargeTitle>서원교입니다</LargeTitle>
              <MiniTitle> 개성과 발전을 중요시하는 개발자 </MiniTitle>
            </MainTitle>
          </IntroWrap>
        </Container>
      </Inner>
    </Card>
  );
};

export default Profile;
