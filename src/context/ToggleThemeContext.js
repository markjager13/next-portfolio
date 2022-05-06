import { createContext, useState } from "react";

const ToggleThemeContext = createContext();

export function ToggleThemeProvider( {children} ) {
    const [lightDarkTheme, setLightDarkTheme] = useState("light");

    const toggleLightDarkTheme = () => {
      lightDarkTheme == 'light' ? setLightDarkTheme('dark') : setLightDarkTheme('light')
    }

    return (
        <ToggleThemeContext.Provider value={{lightDarkTheme, toggleLightDarkTheme}}>
            {children}
        </ToggleThemeContext.Provider>
    )

};

export default ToggleThemeContext;