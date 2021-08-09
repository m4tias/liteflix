import { useContext, useRef } from 'react';
import { ModalContext } from '../../context';
import * as Styled from './styles';
import ReactDOM from 'react-dom';
import { useOutsideClick } from '../../hooks';

export default function Modal() {
  const { showModal, modalContent, handleModal } = useContext(ModalContext);
  const modalRef = useRef();
  useOutsideClick(modalRef, () => handleModal());

  if (showModal) {
    return ReactDOM.createPortal(
      <>
        <Styled.GlobalStyled />
        <Styled.Container ref={modalRef}>{modalContent}</Styled.Container>
      </>,
      document.getElementById('modal')
    );
  } else return null;
}
