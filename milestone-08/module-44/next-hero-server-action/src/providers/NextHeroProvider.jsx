"use client";
import { ThemeProvider } from "next-themes";

const NextHeroProvider = ({children}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default NextHeroProvider;
