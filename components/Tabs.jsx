import React from "react";

const Tabs = () => {
  return (
    <div className="flex overflow-x-auto my-3 flex-row items-center divide-x">
      <div className="h-[40px] flex items-center border-2 text-[14px] leading-[20px] bg-[#FFFFFF] rounded-t px-[16px] py-[10px]">
        My details
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px]">
        Profile
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px]">
        Password
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px]">
        Team
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px]">
        Plan
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px]">
        Billing
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF]  px-[16px] py-[10px]">
        Notifications
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] px-[16px] py-[10px]">
        Integrations
      </div>
      <div className="h-[40px] flex items-center border-2 bg-[#FFFFFF] rounded-t  px-[16px] py-[10px]">
        API
      </div>
    </div>
  );
};

export default Tabs;
