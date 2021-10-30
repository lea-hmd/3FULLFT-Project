import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/themes/GlobalStyle';
import { useDarkMode } from './components/themes/useDarkMode';
import { lightTheme, darkTheme } from './components/themes/Themes';
import Toggle from './components/themes/Toggler';
import ChoixPains from './views/choix-pains';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Header></Header>
        <ChoixPains></ChoixPains>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
