import { useState } from "react"
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../themes/default";
import GlobalStyles from './globals';

const Theme = ({ children }) => {

  const [theme, setTheme] = useState("light");

  //this needs to be passed to header, how to get it there?
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
  <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)};

export default Theme;