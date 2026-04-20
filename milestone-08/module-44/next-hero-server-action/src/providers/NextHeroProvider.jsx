"use client";
import { ThemeProvider } from "next-themes";

const NextHeroProvider = ({children}) => {
  return (
    <ThemeProvider  defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default NextHeroProvider;
