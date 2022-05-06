import Theme from '../styles/theme';
import { ToggleThemeProvider } from '../context/ToggleThemeContext';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <ToggleThemeProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ToggleThemeProvider>
  </>
  )
}

export default MyApp
