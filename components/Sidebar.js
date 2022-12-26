import React from "react";
import Image from "next/image";
import { Seed } from "./seed";

const Sidebar = () => {
  return (
    <div className="w-[280px] hidden md:block md:border-2 md:pt-[32px] p-[0px] bg-[#FFFFFF]">
      <div className="p-[0px]   pr-[20px]  pl-[20px] mb-5">
        <Image src="/../images/Logo.png" width={143} height={32} alt="logo" />
      </div>
      <div className="px-[24px] py-[0px] mx-5 flex items-center h-[44px] border-2 rounded-lg">
        <Image
          src="/../images/search.png"
          width={20}
          height={20}
          alt="search"
          className="mr-2"
        />
        <input
          type="search"
          placeholder="Search"
          className="focus:outline-none w-[100%]"
        />
      </div>
      <div className="px-[16px] my-5 ">
        {Seed.map((item, index) => {
          return (
            <div
              className="flex flex-row items-center my-2 py-[8px] px-[8px] bg-[#FFFFFF] rounded-md w-[247px] h-[40px]"
              key={index}
            >
              <Image height={24} width={24} src={item.icon} alt={item.alt} />
              <div className="pl-4 text-[16px] font-[500] not-italic leading-[24px] text-[#344054]">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer flex flex-col pt-[0px] pb-[32px] px-[16px]">
        <div className="flex flex-row items-center py-[8px] px-[8px] rounded-md bg-[#FFFFFF] w-[247px] h-[40px]">
          <Image height={24} width={24} src="/../images/buoy.png" alt="buoy" />
          <div className="pl-4 text-[16px] font-[500] not-italic leading-[24px] text-[#344054]">
            Support
          </div>
        </div>
        <div className="flex flex-row items-center py-[8px] px-[8px] rounded-md bg-[#FFFFFF] w-[247px] h-[40px]">
          <Image
            height={24}
            width={24}
            src="/../images/settings.png"
            alt="setting"
          />
          <div className="pl-4 text-[16px] font-[500] not-italic leading-[24px] text-[#344054]">
            Settings
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFB] rounded-lg px-[16px] mx-3 py-[20px]">
        <div>
          <div className="text-[#101828] leading-[20px] text-[14px] not-italic font-[500]">
            New Features available!
          </div>
          <div className="text-[#667085] leading-[20px] text-[14px] my-2 not-italic font-[500]">
            Check out the new dashboard view. Pages now load faster
          </div>
          <div className="rounded-md">
            <Image
              height={136}
              width={215}
              src="/../images/image-wrap.png"
              alt="image-wrap"
            />
          </div>
        </div>
        <div className="action my-3 flex flex-row items-center w-[149px] h-[20px]">
          <div className="text-[#667085] pr-3 leading-[20px] text-[14px] my-2 not-italic font-[500]">
            Dimiss
          </div>
          <div className="text-[#6941C6] leading-[20px] text-[14px] my-2 not-italic font-[500]">
            What is new
          </div>
        </div>
      </div>
      <div className="divide-x-[3px] my-3 mx-3 bg-[#EAECF0] h-[1px]"></div>
      <div className="account flex flex-row justify-between py-[0px] px-[16px] mb-10">
        <div className="flex flex-row">
          <Image
            height={40}
            alt="avatar"
            width={40}
            src="/../images/Avatar.png"
            className="mr-3"
          />
          <div className="flex flex-col">
            <div className="text-[#101828] leading-[20px] text-[14px] not-italic font-[500]">
              Olivia Rhye
            </div>
            <div className="text-[#667085] leading-[20px] text-[14px] not-italic font-[500] ">
              olivia@untitledui.com
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/../images/Button.png"
            alt="button"
            width={36}
            height={36}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
