import React from "react";

const Tabs = () => {
  return (
    <div className="flex overflow-x-auto my-3 mt-6 md:mt-0 flex-row items-center divide-x">
      <div className="h-[40px] flex items-center border-2 text-[14px] leading-[20px] bg-[#FFFFFF] font-sans text-[#344054] rounded-t px-[16px] py-[10px]">
        My details
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px] font-sans text-[#344054]">
        Profile
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px] font-sans text-[#344054]">
        Password
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px] font-sans text-[#344054]">
        Team
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px] font-sans text-[#344054]">
        Plan
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px] font-sans text-[#344054]">
        Billing
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF]  px-[16px] py-[10px] font-sans text-[#344054]">
        Notifications
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px] font-sans text-[#344054]">
        Integrations
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] rounded-t  px-[16px] py-[10px] font-sans text-[#344054]">
        API
      </div>
    </div>
  );
};

export default Tabs;
