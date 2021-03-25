import React, { useEffect } from 'react';
import Modal from './Modal';
import { useVerticalCarouselContext } from '../../providers/SlickProvider';

const settings = {
  footer: null,
  bodyStyle: {
    padding: 0,
  },
  maskClosable: true,
  destroyOnClose: true,
};

const ModalContainer = ({ children, visible, ...rest }) => {
  const { setStuck } = useVerticalCarouselContext();

  useEffect(() => {
    setStuck(visible);
  }, [visible]);

  return (
    <Modal visible={visible} {...settings} {...rest}>
      {children}
    </Modal>
  );
};

export default ModalContainer;
