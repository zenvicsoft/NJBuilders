import APP_CONSTANTS from "@/config/AppConstants";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 shrink-0 bg-white flex items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} {APP_CONSTANTS.Company_name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
