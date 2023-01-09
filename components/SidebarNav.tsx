import React from "react";
import Image from "next/image";
import { Seed } from "./seed";
const SidebarNav = () => {
  return (
    <div>
      <div className=" mt-6  mb-8">
        {Seed.map((item, index) => {
          return (
            <div
              className="flex mt-3 mx-4  flex-row items-center px-4 bg-[#FFFFFF] rounded-md h-[40px]"
              key={index}
            >
              <Image height={24} width={24} src={item.icon} alt={item.alt} />
              <div className="pl-3 text-[16px] font-[500] font-sans not-italic leading-[24px] text-[#344054]">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col mx-4 mb-6">
        <div className="flex flex-row items-center px-3 rounded-md bg-[#FFFFFF]  h-[40px]">
          <Image height={24} width={24} src="/buoy.png" alt="buoy" />
          <div className="pl-3 text-[16px] font-[500] not-italic leading-[24px] text-[#344054]">
            Support
          </div>
        </div>
        <div className="flex flex-row items-center px-3 rounded-md bg-[#FFFFFF] mt-1 h-[40px]">
          <Image height={24} width={24} src="/settings.png" alt="setting" />
          <div className="pl-3 text-[16px] font-[500] not-italic leading-[24px] text-[#344054]">
            Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
