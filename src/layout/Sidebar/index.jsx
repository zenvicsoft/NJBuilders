import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Sidebar = ({
  collapsed,
  setHovered,
  hovered,
  mobileOpen,
  setMobileOpen,
}) => {
  const NavItems = [
    { name: "Dashboard", icon: "fa-chart-pie", path: "/dashboard/" },
    { name: "Staff", icon: "fa-clipboard-user", path: "/staff/" },
    { name: "Labour", icon: "fa-person-digging", path: "/labour/" },
    { name: "Site", icon: "fa-building", path: "/site/" },
    { name: "Account", icon: "fa-book-open", path: "/account/" },
    { name: "Supplier", icon: "fa-truck-arrow-right", path: "/supplier/" },
    { name: "Tools", icon: "fa-screwdriver-wrench", path: "/tools/" },
    // { name: "Roles", icon: "fa-user-lock", path: "/roles/" },
    { name: "Report", icon: "fa-file-arrow-down", path: "/report/" },
  ];
  return (
    <aside
      className={`
    sidebar
    h-screen overflow-hidden shrink-0 bg-white border-r border-gray-300 flex flex-col
    fixed md:static top-0 left-0 z-20
    transition-all duration-300
    ${mobileOpen ? "w-60" : collapsed && !hovered ? "w-16" : "w-60"}
    ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
      onMouseEnter={() => !mobileOpen && setHovered(true)}
      onMouseLeave={() => !mobileOpen && setHovered(false)}
    >
      {/* Logo */}
      <div className="h-14 flex items-center justify-between px-4 py-4 border-b border-gray-200">
        {collapsed && !hovered && !mobileOpen ? (
          <Link to="/dashboard/" className="flex items-center gap-2">
            <img src="/assets/favicon.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        ) : (
          <Link to="/dashboard/" className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        )}

        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden text-text-secondary hover:text-brand-primary"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {NavItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <i className={`fa-solid ${item.icon}`}></i>
                {(!collapsed || hovered || mobileOpen) && (
                  <span>{item.name}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
