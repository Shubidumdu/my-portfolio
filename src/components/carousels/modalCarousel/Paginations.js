import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const PageButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transition: 0.3s;
  border-radius: 2px;

  background: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.sub : theme.colors.white};
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.black : theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    border: 1px solid ${({ theme }) => theme.colors.main};
    background: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  }

  &.slick-active {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.main};
    border: 1px solid ${({ theme }) => theme.colors.main};
  }
`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

const Paginations = ({ origin }) => {
  const dots = origin.map(
    ({
      props: {
        className,
        children: {
          props: { onClick },
        },
      },
    }) => ({
      className,
      onClick,
    }),
  );

  return (
    <ButtonsWrap>
      {dots.map(({ className, onClick }, index) => (
        <PageButton
          size="small"
          type={className === 'slick-active' ? 'primary' : 'default'}
          key={index}
          className={className}
          onClick={onClick}
        >
          {index + 1}
        </PageButton>
      ))}
    </ButtonsWrap>
  );
};

export default Paginations;
