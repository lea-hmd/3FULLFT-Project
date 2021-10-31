import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/themes/GlobalStyle';
import { useDarkMode } from './components/themes/useDarkMode';
import { lightTheme, darkTheme } from './components/themes/Themes';
import Toggle from './components/themes/Toggler';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStructure from './views/AppStructure';
import { OrderContext } from '../src/context/OrderContext';
import { Button } from '@mui/material';
import DarkModeIcon from '../src/components/themes/Toggler';
import LightModeIcon from '../src/components/themes/Toggler';
function App() {
  //const [theme, themeToggler] = useDarkMode();
  const { orderState, orderDispatch } = React.useContext(OrderContext);
  const themeMode = orderState.theme === 'light' ? lightTheme : darkTheme;
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <div>
          <GlobalStyles />

          {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
          <AppStructure></AppStructure>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
