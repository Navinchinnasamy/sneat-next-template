"use client"

import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

import Menu from "../components/menu";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeLayout: React.FC<ThemeProviderProps> = ({ children }) => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { isSideNavOpen } = context;
  return (
    <div
      className={`light-style layout-menu-fixed ${
        isSideNavOpen ? "layout-menu-expanded" : ""
      }`}
    >
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Menu />
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
              <div className="container-fluid flex-grow-1 container-p-y">
                {children}
              </div>
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  );
};

export default ThemeLayout;
