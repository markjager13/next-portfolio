import { createContext, useState, useEffect } from "react";

const ToggleThemeContext = createContext();

export function ToggleThemeProvider( {children} ) {
    const [lightDarkTheme, setLightDarkTheme] = useState("light");

    const setMode = mode => {
        window.localStorage.setItem('lightDarkTheme', mode)
        setLightDarkTheme(mode)
    };

    const toggleLightDarkTheme = () => {
      lightDarkTheme == 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('lightDarkTheme');
        localTheme && setLightDarkTheme(localTheme)
    }, []);

    return (
        <ToggleThemeContext.Provider value={{lightDarkTheme, toggleLightDarkTheme}}>
            {children}
        </ToggleThemeContext.Provider>
    )

};

export default ToggleThemeContext;