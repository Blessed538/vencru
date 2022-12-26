import React, { useState, useRef } from "react";
import Image from "next/image";
import Table from "./Table";
import Divider from "./Divider";
import Tabs from "./Tabs";
import MobileSidebar from "./MobileSidebar";
const MainContent = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  console.log("sidebarstatus", sidebarStatus);

  const openSidebar = () => {
    setSidebarStatus((prev) => !prev);
  };
  return (
    <div className="md:pt-[32px] p-[0px] pb-[20px] bg-[#F9FAFB]">
      {sidebarStatus ? (
        <>
          <div className="absolute block md:hidden">
            <MobileSidebar />
          </div>
        </>
      ) : null}
      {/* mobile view */}
      <div className="bg-[#FFFFFF] sm:flex px-[16px] items-center mb-3 py-[12px] md:hidden flex flex-row justify-between">
        <div>
          <Image src="/../public/Logo.png" width={143} height={32} />
        </div>
        <div className="" onClick={() => openSidebar()}>
          <Image src="/../public/nav.png" width={40} height={40} />
        </div>
      </div>
      <div className="py-[0px] px-[16px] md:px-[32px]">
        <div className="flex flex-col">
          <div className="not-italic font-[500] text-[30px] leading-[30px] text-[#101828]">
            Settings
          </div>
          <div className="text-[#667085] font-[400] text-[16px] leading-[24px] mb-5 mt-2">
            Manage your team and preferences here.
          </div>
        </div>
        <Tabs />
        <div className="my-5">
          <div className="text-[#101828] text-[18px] leading-[28px] not-italic">
            Payment method
          </div>
          <div className="text-[#667085] text-[14px] mt-1 leading-[20px] not-italic font-[400px]">
            Update your billing details and address.
          </div>
        </div>

        <Divider />
        <div className="my-6 flex flex-col md:flex-row">
          <div className="md:w-[30%] my-3">
            <div className="not-italic font-[500] text-[14px] leading-[20px] text-[#344054]">
              Contact email
            </div>
            <div className="font-[400px] not-italic leading-[20px] text-[14px]">
              Where should invoices be sent?
            </div>
          </div>
          <div className="flex-col flex-1">
            <div className="flex items-start flex-row">
              <div className="pr-3">
                <input type="radio" />
              </div>
              <div className="flex flex-col">
                <div className="text-[#344054] text-[14px] leading-[20px] not-italic">
                  Send to my account email
                </div>
                <div className="text-[#667085] text-[14px] leading-[20px] not-italic">
                  olivia@untitledui.com
                </div>
              </div>
            </div>
            <div className="flex items-start flex-row my-4">
              <div className="pr-3">
                <input type="radio" />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-[#344054] text-[14px] leading-[20px] not-italic">
                  Send to an alternative email
                </div>
                <div className="text-[#667085] md:max-w-[488px] w-[100%] mt-3 rounded-lg bg-[#FFFFFF] shadow-[0px_1px_2px_rgba(16, 24, 40, 0.05)] px-[14px] border-1 border-[#D0D5DD] border-solid py-[10px]">
                  <div className="flex -flex-row items-center">
                    <span className="mr-3">
                      <Image height={20} width={20} src="/../public/mail.png" />
                    </span>
                    <span className="font-[400] text-[#101828] text-[14px] leading-[20px]">
                      billing@untitledui.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider />
        <div className="my-6 flex flex-col md:flex-row w-full">
          <div className="md:w-[30%] my-5 md:my-0">
            <div className="not-italic font-[500] text-[14px] leading-[20px] text-[#344054]">
              Contact details
            </div>
            <div className="font-[400px] not-italic leading-[20px] text-[14px]">
              Select default payment method.
            </div>
          </div>
          <div className="flex-1 flex-col ">
            <div className="bg-[#F9F5FF] rounded-lg border-solid  w-[100%]  border-2 border-[#D6BBFB] p-[16px]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row ">
                  <div className="mr-3">
                    <Image
                      height={32}
                      width={46}
                      src="/../public/visa.png"
                      className="border-2 border-[#F2F4F7] rounded-md bg-[#FFFFFF]"
                    />
                  </div>
                  <div className="flex-col flex">
                    <div className="text-[#53389E] text-[14px] not-italic leading-[20px] font-[500]">
                      Visa ending in 1234
                    </div>
                    <div className="text-[#7F56D9] text-[14px] leading-[20px] not-italic font-[400]">
                      Expiry 06/2024
                    </div>
                    <div className="flex flex-row my-3">
                      <span className="text-[#9E77ED] text-[14px] leading-[20px] not-italic font-[400] mr-2">
                        Set as default
                      </span>
                      <span className="text-[#6941C6] text-[14px] leading-[20px] not-italic font-[400]">
                        Edit
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    height={16}
                    width={16}
                    src="/../public/checkbox.png"
                    className="border-2 border-[#F2F4F7] rounded-md bg-[#FFFFFF]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg border-solid  my-4 w-[100%] border-2 border-[#EAECF0] p-[16px]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <div className="mr-3">
                    <Image
                      height={32}
                      width={46}
                      src="/../public/mastercard.png"
                      className="border-2 border-[#F2F4F7] rounded-md bg-[#FFFFFF]"
                    />
                  </div>
                  <div className="flex-col flex">
                    <div className="text-[#53389E] text-[14px] not-italic leading-[20px] font-[500]">
                      Mastercard ending in 1234
                    </div>
                    <div className="text-[#7F56D9] text-[14px] leading-[20px] not-italic font-[400]">
                      Expiry 06/2024
                    </div>
                    <div className="flex flex-row my-3">
                      <span className="text-[#9E77ED] text-[14px] leading-[20px] not-italic font-[400] mr-2">
                        Set as default
                      </span>
                      <span className="text-[#6941C6] text-[14px] leading-[20px] not-italic font-[400]">
                        Edit
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <Image
                    height={16}
                    width={16}
                    src="/../public/checkboxlight.png"
                    className="border-2 border-[#F2F4F7] rounded-md bg-[#FFFFFF]"
                  />
                </div>
              </div>
            </div>

            {/* add button/ */}
            <div className="flex flex-row items-center">
              <span className="mr-2">
                <button className="">
                  <Image width={20} height={20} src="/../public/plus.png" />
                </button>
              </span>
              <span className="text-[#667085] text-[14px] leading-[20px] not-italic font-[500]">
                Add new payment method
              </span>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default MainContent;
