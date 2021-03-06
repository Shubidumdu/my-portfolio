import React from 'react';
import { Modal as M } from 'antd';
import styled from 'styled-components';

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
        font-weight: ${({ theme }) =>
          theme.mode === 'light' ? 'bold' : 'normal'};
      }
    }

    > .ant-modal-body {
      color: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.black
          : theme.colors.white} !important;
      font-weight: ${({ theme }) =>
        theme.mode === 'light' ? 'bold' : 'normal'};
    }
  }
`;

const Modal = ({ children, visible, ...rest }) => {
  return (
    <StyledModal visible={visible} {...rest}>
      {children}
    </StyledModal>
  );
};

export default Modal;
