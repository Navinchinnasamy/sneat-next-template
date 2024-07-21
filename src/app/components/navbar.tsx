"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

export default function Navbar() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { toggleSideNav } = context;
  return (
    <nav
      className="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <Link
          className="nav-item nav-link px-0 me-xl-4"
          href=""
          onClick={toggleSideNav}
        >
          <i className="bx bx-menu bx-sm"></i>
        </Link>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        {/* <!-- Search --> */}
        {/* <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div> */}
        {/* <!-- /Search --> */}

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* <!-- Place this tag where you want the button to render. --> */}
          
          {/* <!-- User --> */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <Link
              className="nav-link dropdown-toggle hide-arrow"
              href=""
              data-bs-toggle="dropdown"
            >
              <div className="avatar avatar-online">
                <Image
                  src="/img/avatars/1.png"
                  alt="Avatar"
                  className="w-px-40 h-auto rounded-circle"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                      <Image
                  src="/img/avatars/1.png"
                  alt="Avatar"
                  className="w-px-40 h-auto rounded-circle"
                  width={40}
                  height={40}
                />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">John Doe</span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user me-2"></i>
                  <span className="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-cog me-2"></i>
                  <span className="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="d-flex align-items-center align-middle">
                    <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                    <span className="flex-grow-1 align-middle">Billing</span>
                    <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                      4
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <a className="dropdown-item" href="auth-login-basic.html">
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!--/ User --> */}
        </ul>
      </div>
    </nav>
  );
}
