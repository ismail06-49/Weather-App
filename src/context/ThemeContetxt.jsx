import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {

    const url = '/dist/weather_icons/set04/big'
    const [dark, setDark] = useState(true)

    function saveThemeToLocal(theme) {
        localStorage.setItem('theme', JSON.stringify(theme))
    }
    
    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem('theme'));
        if (storedTheme !== null) {
            setDark(storedTheme);
            return;
        }

        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDark(isSystemDark === true);
    }, [])

    return (
        <ThemeContext.Provider value={{dark, setDark, url, saveThemeToLocal}}>
            {children}
        </ThemeContext.Provider>
    )
}
