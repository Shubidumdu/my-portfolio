import React from 'react';
import { Button } from 'antd';
import { MdOpenInBrowser } from 'react-icons/md';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const EnterButton = ({ href }) => {
  return (
    <ButtonWrap>
      <Button href={href} target="_blank" type="link">
        <MdOpenInBrowser size="2rem" />
      </Button>
    </ButtonWrap>
  );
};

export default EnterButton;
