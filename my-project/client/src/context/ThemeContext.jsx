import React, {createContext, useContext, useState, useEffect} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
        if(theme){
            document.documentElement.classList.add(theme);
        }
        else {
            document.documentElement.classList.remove("light", "dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(isDark => isDark === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};  
