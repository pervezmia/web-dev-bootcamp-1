"use client"
import { useTheme } from "@heroui/react";

const ThemeToggle = () => {
     const { theme, setTheme } = useTheme();

  return (
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    
  );
};

export default ThemeToggle;
