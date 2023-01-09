import React from "react";
import Image from "next/image";
import { Seed } from "./seed";
import Divider from "./Divider";
import SidebarHeader from "./SidebarHeader";
import Search from "./Search";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";
const MobileSidebar = () => {
  return (
    <div className="mobile">
      <SidebarHeader />
      <Search />
      <SidebarNav />
      <SidebarFooter />
    </div>
  );
};

export default MobileSidebar;
