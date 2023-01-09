import React, { useState } from "react";
import Image from "next/image";
import Table from "./Table";
import Divider from "./Divider";
import MainForm from "./Form";
import MobileSidebar from "./MobileSidebar";
import MainHeaderSection from "./MainHeaderSection";
const MainContent = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [email, setEmail] = useState("Alternative");

  const openSidebar = () => {
    setSidebarStatus((prev) => !prev);
  };

  const onOptionChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="md:px-[32px] pt-0  md:pt-8 bg-[#F9FAFB]">
      {/* {sidebarStatus ? (
        <>
          <div className="absolute block md:hidden">
            <MobileSidebar />
          </div>
        </>
      ) : null} */}
      {/* mobile view */}

      <MainHeaderSection />
      <section className="mt-8 px-4 md:px-0">
        <div className="text-[#101828] text-[18px] leading-[28px] font-[500] font-sans not-italic">
          Payment method
        </div>
        <div className="text-[#667085] text-[14px] mt-1 leading-5 mb-5 font-sans not-italic font-[400px]">
          Update your billing details and address.
        </div>
      </section>

      <Divider />
      <div className="pt-6 flex flex-col md:flex-row pb-5 px-4 md:px-0">
        <div className="pr-8 md:w-[280px]">
          <div className="not-italic font-medium text-[14px] font-sans leading-[20px] text-[#344054]">
            Contact email
          </div>
          <div className="font-normal not-italic leading-[20px] mb-5 md:mb-0 text-[#667085] font-sans text-[14px]">
            Where should invoices be sent?
          </div>
        </div>
        <div className="flex-col flex-1 md:w-[512px]">
          <div className="flex items-start flex-row">
            <div className="pr-2">
              <input
                type="radio"
                value="Account"
                id="account"
                checked={email === "Account"}
                name="email"
                onChange={onOptionChange}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-[#344054] font-medium font-sans text-[14px] leading-[20px] not-italic">
                Send to my account email
              </div>
              <div className="text-[#667085] text-[14px] font-normal font-sans leading-[20px] not-italic">
                olivia@untitledui.com
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row mt-4">
            <div className="pr-2">
              <input
                type="radio"
                value="Alternative"
                id="alternative"
                checked={email === "Alternative"}
                name="email"
                onChange={onOptionChange}
              />
            </div>
            <div className="flex flex-col max-w-lg w-full">
              <div className="text-[#344054] font-medium font-sans text-[14px] leading-[20px] not-italic">
                Send to an alternative email
              </div>
              <div className="text-[#667085] mt-3  rounded-lg bg-[#FFFFFF] px-4 py-[10px]  shadow-[0px_1px_2px_rgba(16, 24, 40, 0.05)] border-2 border-[#D0D5DD] border-solid">
                <div className="flex -flex-row items-center">
                  <span className="pr-2">
                    <Image height={20} width={20} alt="mail" src="/mail.png" />
                  </span>
                  <span className="font-normal font-sans  text-[#101828] text-[14px] leading-[20px]">
                    billing@untitledui.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />
      <MainForm />
      <Table />
    </div>
  );
};

export default MainContent;
