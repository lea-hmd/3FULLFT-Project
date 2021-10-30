import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/themes/GlobalStyle';
import { useDarkMode } from './components/themes/useDarkMode';
import { lightTheme, darkTheme } from './components/themes/Themes';
import Toggle from './components/themes/Toggler';
import ChoixViandes from './views/choix-viandes';

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <ChoixViandes></ChoixViandes>
      </div>
    </ThemeProvider>
  );
}

export default App;
