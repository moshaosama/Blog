import { useState, useEffect, createContext, useContext } from "react";
import type {
  ThemeContextData,
  ThemeContextProps,
} from "../Types/ThemeContext";

const ThemeContext = createContext<ThemeContextData | null>(null);

const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("Theme") || "light";
  });

  useEffect(() => {
    window.localStorage.setItem("Theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
