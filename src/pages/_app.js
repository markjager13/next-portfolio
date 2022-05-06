import { useState, useEffect } from 'react';
import Theme from '../styles/theme';
import { ToggleThemeProvider } from '../context/ToggleThemeContext';


function MyApp({ Component, pageProps }) {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
  <>
    <ToggleThemeProvider>
      <Theme>
        {isMounted && <Component {...pageProps} />}
      </Theme>
    </ToggleThemeProvider>
  </>
  )
}

export default MyApp
