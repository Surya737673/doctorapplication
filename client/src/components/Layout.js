import React from "react";
import "./Layout.css";
import { Link, useLocation } from "react-router-dom";
import { useLocale } from "antd/es/locale";
function Layout({ children }) {
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-smile-2-fill",
    },
    {
      name: "Appoinments",
      path: "/appoinments",
      icon: "ri-file-list-3-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-3-line",
    },
    {
      name: "logout",
      path: "/logout",
      icon: "ri-logout-box-line",
    },
  ];
  const menuToBeRendered = userMenu;
  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>SH</h1>
          </div>
          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  <i className={menu.icon}></i>
                  <Link path={menu.path}>{menu.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">header</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
