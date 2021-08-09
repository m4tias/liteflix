import { useContext } from 'react';
import { ModalContext, SidebarContext } from '../../context';
import Icons from '../Icons';
import ModalContent from './ModalContent';
import * as Styled from './styles';

export default function AddMovie() {
  const { handleModal } = useContext(ModalContext);
  const { setShowSidebar } = useContext(SidebarContext);

  return (
    <Styled.AddButton
      onClick={() => {
        handleModal(<ModalContent close={() => handleModal()} />);
        setShowSidebar(false);
      }}
    >
      <Icons icon="plus" /> <span>AGREGAR PELÍCULA</span>
    </Styled.AddButton>
  );
}

