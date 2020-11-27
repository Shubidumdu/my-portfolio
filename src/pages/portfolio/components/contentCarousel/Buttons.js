import { Button } from 'antd';
import React, { useRef } from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  text-align: center;
`;

const Buttons = ({ onBack, onNext }) => {
  return (
    <ButtonWrap>
      <Button onClick={onBack}>왼쪽</Button>
      <Button onClick={onNext}>오른쪽</Button>
    </ButtonWrap>
  );
};

export default Buttons;
