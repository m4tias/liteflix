import { ThemeProvider } from 'styled-components';
import { ModalProvider, SidebarProvider } from '../context';
import theme from '../cssTheme';
import Home from '../screens/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <SidebarProvider>
          <Home />
        </SidebarProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
