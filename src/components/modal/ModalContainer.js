import React, { useEffect } from 'react';
import Modal from './Modal';
import { useVerticalCarouselContext } from '../../providers/SlickProvider';
import { useModalContext } from '../../providers/ModalProvider';

const settings = {
  footer: null,
  bodyStyle: {
    padding: 0,
  },
  maskClosable: true,
  destroyOnClose: true,
};

const ModalContainer = ({ ...rest }) => {
  const { setStuck } = useVerticalCarouselContext();
  const { title, ModalContent, isOpen, setModalOpen } = useModalContext();

  const onCancel = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setStuck(isOpen);
  }, [isOpen]);

  return (
    <Modal
      visible={isOpen}
      title={title}
      onCancel={onCancel}
      {...settings}
      {...rest}
    >
      <ModalContent />
    </Modal>
  );
};

export default ModalContainer;
