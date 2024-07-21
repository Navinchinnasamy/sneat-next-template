"use client";

import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import MenuItem from "@/app/components/menu-item";
import Image from "next/image";

export default function Menu() {
  const menuList = [
    {
      header: "",
      menuName: "Dashboard",
      menuLink: "/",
      menuIcon: "bx-home-circle",
      hasSubMenu: false,
      submenus: [],
    },
    {
      header: "",
      menuName: "Layouts",
      menuLink: "",
      menuIcon: "bx-layout",
      hasSubMenu: true,
      submenus: [
        {
          menuName: "Without Menu",
          menuLink: "/layouts/without-menu",
          menuIcon: "",
          hasSubMenu: false,
          submenus: [],
        },
        {
          menuName: "Without NavBar",
          menuLink: "/layouts/without-navbar",
          menuIcon: "",
          hasSubMenu: false,
          submenus: [],
        },
        {
          menuName: "Container",
          menuLink: "/layouts/container",
          menuIcon: "",
          hasSubMenu: false,
          submenus: [],
        },
        {
          menuName: "Fluid",
          menuLink: "/layouts/fluid",
          menuIcon: "",
          hasSubMenu: false,
          submenus: [],
        },
      ],
    },
    {
      header: "",
      menuName: "Tables",
      menuLink: "/tables",
      menuIcon: "bx-table",
      hasSubMenu: false,
      submenus: [],
    },
    {
      header: "",
      menuName: "Forms",
      menuLink: "",
      menuIcon: "bx-detail",
      hasSubMenu: true,
      submenus: [
        {
          header: "",
          menuName: "Vertical Form",
          menuLink: "/forms/vertical-form",
          menuIcon: "",
          hasSubMenu: false,
          submenus: [],
        },
        {
          header: "",
          menuName: "Horizontal Form",
          menuLink: "/forms/horizontal-form",
          menuIcon: "",
          hasSubMenu: false,
          submenus: [],
        },
      ],
    },
    {
      header: "",
      menuName: "UI Elements",
      menuLink: "",
      menuIcon: "bx-box",
      hasSubMenu: true,
      submenus: [
        // {
        //   header: "",
        //   menuName: "Models",
        //   menuLink: "/ui/models",
        //   menuIcon: "",
        //   hasSubMenu: false,
        //   submenus: [],
        // },
        {
          header: "",
          menuName: "Tabs & Pills",
          menuLink: "/ui/tabs",
          menuIcon: "",
          hasSubMenu: false,
          submenus: [],
        },
      ],
    },
  ];
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { toggleSideNav } = context;
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo">
            <Image
              src="https://cdn.shriramfinance.in/sfl-fe/assets/images/sw-logo.svg"
              width={165}
              height={52}
              alt="Brand Logo"
              priority={true}
            />
          </span>
          {/* <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Sneat
          </span> */}
        </a>

        <Link
          href=""
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          onClick={toggleSideNav}
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </Link>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {menuList.map((menu, i) => (
          <MenuItem menu={menu} key={menu.menuName+'_'+i} />
        ))}
      </ul>
    </aside>
  );
}
