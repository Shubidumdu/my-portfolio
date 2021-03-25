import { useState } from 'react';

const useModalStates = () => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const onClick = (idx) => {
    setIndex(idx);
    setModalOpen(true);
  };
  const onCancel = () => {
    setModalOpen(false);
  };

  return {
    index,
    modalOpen,
    onClick,
    onCancel,
  };
};

export default useModalStates;
