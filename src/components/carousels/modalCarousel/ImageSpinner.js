import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import styled, { useTheme } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageSpinner = () => {
  const { colors } = useTheme();
  const { main: color } = colors;
  return (
    <Container>
      <FadeLoader color={color} loading={true} />
    </Container>
  );
};

export default ImageSpinner;
