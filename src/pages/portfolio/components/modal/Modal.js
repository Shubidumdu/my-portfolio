import React, { useEffect } from 'react';
import { Button, Modal as M, Tag as T } from 'antd';
import styled, { css, useTheme } from 'styled-components';
import { useVerticalSlickContext } from '../../SlickProvider';
import { darken, lighten } from 'polished';
import { MdOpenInBrowser } from 'react-icons/md';

const StyledModal = styled(M)`
  > .ant-modal-content {
    background: ${({ theme }) =>
      theme.mode === 'light'
        ? theme.colors.white
        : theme.colors.sub} !important;

    .ant-modal-close-x {
      color: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.sub
          : theme.colors.white} !important;
    }

    > .ant-modal-header {
      text-align: center;
      background: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.white
          : theme.colors.sub} !important;
      border-bottom: 1px solid
        ${({ theme }) =>
          theme.mode === 'light' ? theme.colors.base : theme.colors.black};

      > .ant-modal-title {
        color: ${({ theme }) =>
          theme.mode === 'light'
            ? theme.colors.black
            : theme.colors.white} !important;
      }
    }

    > .ant-modal-body {
      color: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.black
          : theme.colors.white} !important;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const StyledEnterButton = styled(Button)``;

export const EnterButton = ({ href }) => {
  return (
    <ButtonWrap>
      <StyledEnterButton href={href} target="_blank" type="link">
        <MdOpenInBrowser size="2rem" />
      </StyledEnterButton>
    </ButtonWrap>
  );
};

export const TagWrap = styled.div`
  margin-top: 1rem;
`;

const StyledTag = styled(T)`
  & + & {
    margin: 0 10px 10px 0;
  }
`;

export const Tag = ({ children }) => {
  const theme = useTheme();
  const color =
    theme.mode === 'light' ? 'default' : lighten(0.1, theme.colors.base);
  return <StyledTag color={color}>{children}</StyledTag>;
};

const settings = {
  footer: null,
  bodyStyle: {
    padding: 0,
  },
  maskClosable: true,
  destroyOnClose: true,
};

const Modal = ({ children, visible, ...rest }) => {
  const { setStuck } = useVerticalSlickContext();

  useEffect(() => {
    setStuck(visible);
  }, [visible]);

  return (
    <StyledModal visible={visible} {...settings} {...rest}>
      {children}
    </StyledModal>
  );
};

export default Modal;
