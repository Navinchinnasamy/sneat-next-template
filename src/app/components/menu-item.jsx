"use client"

import Link from "next/link";
import { useState } from "react";
export default function MenuItem({menu}) {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleMenu = (menuName) => {
        if (activeMenu === menuName) {
          setActiveMenu(null);
        } else {
          setActiveMenu(menuName);
        }
      };

      const toggleSubMenu = (menuName, subMenuName) => {
        if(subMenuName === activeSubMenu) {
            setActiveSubMenu(null);
        } else {
            setActiveSubMenu(subMenuName);
            setActiveMenu(menuName);
        }
      }

    return (
        <>
            {menu.header && (
              <li className="menu-header small text-uppercase" key={menu.header}>
                <span className="menu-header-text">{menu.header}</span>
              </li>
            )}
            <li className={`menu-item ${activeMenu===menu.menuName ? "active open": ""}`} key={menu.menuName} onClick={() => toggleMenu(menu.menuName)}>
              <Link
                href={menu.menuLink}
                className={`menu-link ${menu.hasSubMenu ? "menu-toggle" : ""}`}
              >
                <i className={"menu-icon tf-icons bx " + menu.menuIcon}></i>
                <div data-i18n="Analytics">{menu.menuName}</div>
              </Link>
              {menu.hasSubMenu && (
                <ul className="menu-sub">
                    {menu.submenus.map((submenu, i) => (
                    <li className={`menu-item ${activeSubMenu===submenu.menuName ? "active open": ""}`} key={submenu.menuName+'_'+i} onClick={() => toggleSubMenu(menu.menuName, submenu.menuName)}>
                    <Link
                      href={submenu.menuLink}
                      className={`menu-link ${
                        submenu.hasSubMenu ? "menu-toggle" : ""
                      }`}
                    >
                      <i
                        className={"menu-icon tf-icons bx " + submenu.menuIcon}
                      ></i>
                      <div data-i18n="Analytics">{submenu.menuName}</div>
                    </Link>
                    {submenu.hasSubMenu && <ul className="menu-sub"></ul>}
                  </li>
                ))}
                  
                </ul>
              )}
            </li>
          </>
    );
}