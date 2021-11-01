import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/themes/GlobalStyle';
import { lightTheme, darkTheme } from './components/themes/Themes';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStructure from './views/AppStructure';
import { OrderContext } from '../src/context/OrderContext';
function App() {
  //const [theme, themeToggler] = useDarkMode();
  const { orderState } = React.useContext(OrderContext);
  const themeMode = orderState.theme === 'light' ? lightTheme : darkTheme;
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <div>
          <GlobalStyles />
          <AppStructure></AppStructure>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
