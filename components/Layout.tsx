import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
const Layout = ({ children }) => {
  return (
    <div className="w-screen flex">
      <Sidebar />
      <div className="flex-1 max-w-[100%]">{children}</div>
    </div>
  );
};

export default Layout;
