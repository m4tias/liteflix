import { useContext } from 'react';
import { SidebarContext } from '../../context';
import AddMovie from '../AddMovie/AddMovie';
import * as Styled from './styles';

function Sidebar() {
  const { showSidebar } = useContext(SidebarContext);
  const items = [
    'INICIO',
    'SERIES',
    'PELICULAS',
    'AGREGADAS RECIENTEMENTE',
    'POPULARES',
    'MIS PELICULAS',
    'MI LISTA',
  ];
  return (
    <>
      {showSidebar && <Styled.GlobalStyle />}
      <Styled.Container show={showSidebar}>
        <Styled.Items>
          {items.map((item) => (
            <li key={item.split(' ').join('')}>{item}</li>
          ))}
        </Styled.Items>
        <Styled.BottomOptions>
          <AddMovie />
          <a href="#cerrar-sesion">CERRAR SESIÓN</a>
        </Styled.BottomOptions>
      </Styled.Container>
    </>
  );
}

export default Sidebar;
