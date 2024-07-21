"use client";

import React, { createContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  isSideNavOpen: boolean;
  toggleSideNav: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>({
  isSideNavOpen: false,
  toggleSideNav: () => void 0,
});

interface ThemeProviderProps {
  children: ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isSideNavOpen, toggleSideNav }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
