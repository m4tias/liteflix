import { useState } from 'react';

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const handleModal = (content = false) => {
    setShowModal(false);
    if (content) {
      setModalContent(content);
      setShowModal(true);
    }
  };

  return { showModal, modalContent, handleModal };
}
