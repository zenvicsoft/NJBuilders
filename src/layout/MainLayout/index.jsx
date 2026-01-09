import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleCollapseSidebar = () => {
    setCollapsed(!collapsed);
  };
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);
  return (
    <div className="flex h-screen">
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <Sidebar
        collapsed={collapsed}
        hovered={hovered}
        setHovered={setHovered}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          handleCollapseSidebar={handleCollapseSidebar}
          collapsed={collapsed}
          setMobileOpen={setMobileOpen}
        />
        <main className="flex-1 overflow-y-auto bg-bg-secondary p-6">
          <Outlet />
        </main>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
