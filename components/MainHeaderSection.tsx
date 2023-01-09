import React, { useState } from "react";
import Image from "next/image";
import Tabs from "./Tabs";
import MobileSidebar from "./MobileSidebar";
const MainHeaderSection = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const openSidebar = () => {
    setSidebarStatus((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-[#FFFFFF] sm:flex px-[16px] items-center mb-3 py-[12px] relative md:hidden flex flex-row justify-between">
        {sidebarStatus ? (
          <>
            <div className="absolute block md:hidden">
              <MobileSidebar />
            </div>
          </>
        ) : null}
        {/* mobile view */}
        <div>
          <Image src="/Logo.png" alt="logo" width={143} height={32} />
        </div>
        <div className="" onClick={() => openSidebar()}>
          <Image src="/nav.png" width={40} height={40} alt="nav" />
        </div>
      </div>

      <div className="flex flex-col pt-8 md:pt-0 px-4 md:px-0">
        <div className="not-italic font-[500]  text-[38px] font-sans leading-[30px] text-[#101828]">
          Settings
        </div>
        <div className="text-[#667085] font-[400] text-[16px] leading-[24px] mb-5 mt-2 font-sans not-italic">
          Manage your team and preferences here.
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default MainHeaderSection;
