import React from "react";

const Header = ({ handleCollapseSidebar, collapsed, setMobileOpen }) => {
  return (
    <header className="h-14 shrink-0 bg-white shadow border-b border-gray-300 flex items-center justify-between px-4">
      {/* <h1 className="text-2xl text-black-800">This is the header</h1> */}
      <div className="flex gap-3">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden mr-3 text-xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Desktop collapse button */}
        <button
          onClick={handleCollapseSidebar}
          className="hidden md:block text-xl"
        >
          <i
            className={`fa-solid ${
              collapsed ? "fa-arrow-right" : "fa-bars-staggered fa-lg"
            }`}
          ></i>
        </button>
        <div className="border border-gray-300 w-60 rounded-lg p-1 flex items-center gap-3">
          <input
            type="text"
            className="w-full h-6 rounded-md outline-none"
            placeholder="Search Keyword"
          />
          <div className="w-10 flex justify-center items-center h-full">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="w-10 h-10 rounded-lg">
        <img
          src="https://imgs.search.brave.com/y51APjrMDdzIrqFL80dzjmvIuKeO-UDmpF_GfFgHelg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/MS85NS9wZXJzb24t/aWNvbi1odW1hbi1h/dmF0YXItdmVjdG9y/LTEyNjkzMTk1Lmpw/Zw"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
