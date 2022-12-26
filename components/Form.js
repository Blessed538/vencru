import React from "react";
import Image from "next/image";

const Form = () => {
  return (
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
                  alt="visa"
                  width={46}
                  src="/../public/static/images/visa.png"
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
                alt="checkbox"
                src="/../public/static/images/checkbox.png"
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
                  alt="mastercard"
                  src="/../public/static/images/mastercard.png"
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
                alt="checkbox"
                width={16}
                src="/../public/static/images/checkboxlight.png"
                className="border-2 border-[#F2F4F7] rounded-md bg-[#FFFFFF]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <span className="mr-2">
            <button className="">
              <Image
                width={20}
                height={20}
                alt="plus"
                src="/../public/static/images/plus.png"
              />
            </button>
          </span>
          <span className="text-[#667085] text-[14px] leading-[20px] not-italic font-[500]">
            Add new payment method
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
