import {Context, createContext, JSX, useContext, useState} from "react";
import {TypePalette} from "./TypePalette"

const ColorContext = createContext({
    setTheme: (newTheme: TypePalette): void => {},
    mode: "dark",
    palette: {
        primary: "yellow",
        secondary: "beige",
        danger: "brown"
    }
}
);
const _theme = {
    mode: "dark",
    palette: {primary: "black",
    secondary: "#444444",
    danger: "#dc3545",}
}


export const ThemeProvider = ({ children }:any) => {
    const [theme, setTheme] = useState(_theme);
    return (
        <ColorContext.Provider value={{...theme, setTheme}}>
            {children}
        </ColorContext.Provider>
    )
}
export const useTheme = () => {
    return useContext(ColorContext);
}
