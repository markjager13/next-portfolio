import Head from 'next/head';
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
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      <title>Mark Jager - Junior Software Developer</title>
    </Head>
    <ToggleThemeProvider>
      <Theme>
        {isMounted && <Component {...pageProps} />}
      </Theme>
    </ToggleThemeProvider>
  </>
  )
}

export default MyApp
