import React from 'react';
import Modal from '../components/Modal';
import { useModal } from '../hooks';

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const { showModal, modalContent, handleModal } = useModal();
  return (
    <ModalContext.Provider value={{ showModal, modalContent, handleModal }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
