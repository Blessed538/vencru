import React from "react";
import Image from "next/image";
import Divider from "./Divider";
const SidebarFooter = () => {
  return (
    <div>
      <div className="bg-[#F9FAFB] px-4 pt-[20px] my-6 rounded-lg  mx-4 ">
        <div className="text-[#101828] leading-[20px] font-sans text-[14px] not-italic font-[500]">
          New Features available!
        </div>
        <div className="text-[#667085] leading-[20px] text-[14px] mt-1 not-italic font-sans font-[400]">
          Check out the new dashboard view. Pages now load faster
        </div>
        <div className="rounded-md">
          <Image
            height={136}
            width={215}
            src="/smile.png"
            alt="image-wrap"
            className=" my-4"
          />
        </div>

        <div className="my-3 flex flex-row items-center pb-5">
          <div className="text-[#667085] pr-3 leading-[20px] text-[14px] font-sans my-2 not-italic font-[500]">
            Dimiss
          </div>
          <div className="text-[#6941C6] leading-[20px] text-[14px] font-sans not-italic font-[500]">
            What is new
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-row justify-between mx-4 mt-6 mb-8">
        <div className="flex flex-row">
          <Image
            height={40}
            alt="avatar"
            width={40}
            src="/Avatar.png"
            className="mr-3"
          />
          <div className="flex flex-col">
            <div className="text-[#101828] leading-[20px] font-sans text-[14px] not-italic font-[500]">
              Olivia Rhye
            </div>
            <div className="text-[#667085] leading-[20px] text-[14px] font-sans not-italic font-[500] ">
              olivia@untitledui.com
            </div>
          </div>
        </div>
        <div className="ml-5">
          <Image src="/Button.png" alt="button" width={36} height={36} />
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;
