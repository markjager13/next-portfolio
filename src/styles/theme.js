import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ToggleThemeContext from '../context/ToggleThemeContext';
import { lightTheme, darkTheme } from "../themes/default";
import GlobalStyles from './globals';

const Theme = ({ children }) => {

  const { lightDarkTheme } = useContext(ToggleThemeContext);

  return (
  <ThemeProvider theme={lightDarkTheme == 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)};

export default Theme;