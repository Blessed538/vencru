import Image from "next/image";
import Search from "./Search";
import { Seed } from "./seed";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <div className="w-[280px] hidden md:block md:border-2 bg-[#FFFFFF]">
      <SidebarHeader />
      <Search />
      <SidebarNav />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
