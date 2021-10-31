import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/themes/GlobalStyle';
import { useDarkMode } from './components/themes/useDarkMode';
import { lightTheme, darkTheme } from './components/themes/Themes';
import Toggle from './components/themes/Toggler';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStructure from './views/AppStructure';

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <div>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <AppStructure></AppStructure>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
