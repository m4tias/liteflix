import { useContext } from 'react';
import * as Styled from './styles';
import Logo from '../Logo';
import Icons from '../Icons';
import Sidebar from '../Sidebar';
import AddMovie from '../AddMovie';
import { SidebarContext } from '../../context';

export default function Header() {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  return (
    <>
      <Styled.Container>
        <Styled.Logo id="logo-container">
          <a href="#home" id="logo">
            <Logo />
          </a>
          <AddMovie />
        </Styled.Logo>

        <Styled.BurgerMenu
          onClick={(e) => {
            setShowSidebar((prev) => !prev);
          }}
          whatIs={!showSidebar ? 'burger' : 'close-button'}
        >
          <span />
          <span />
          <span />
        </Styled.BurgerMenu>

        <Styled.UserProfile>
          <Styled.Notification className="new-notification">
            <Icons icon="bell" />
          </Styled.Notification>
          <a href="#profile">
            <img src="/Perfil.png" alt="Usuario" />
          </a>
        </Styled.UserProfile>
      </Styled.Container>
      <Sidebar />
    </>
  );
}
