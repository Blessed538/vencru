import React, { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [userCard, setUserCard] = useState("Master");

  const selectOption = (e) => {
    setUserCard(e.target.value);
  };

  return (
    <div className="pt-5 flex flex-col md:flex-row w-full px-4 md:px-0">
      <div className="pr-8 md:my-0 md:w-[280px]">
        <div className="not-italic font-sans font-medium text-[14px] leading-[20px] text-[#344054]">
          Contact details
        </div>
        <div className="font-normal font-sans mt-1 not-italic text-[#667085] leading-5 text-[14px]">
          Select default payment method.
        </div>
      </div>
      <div className="flex-col md:w-[70%] mt-5 md:mt-0">
        {cardDetails.map((card, index) => {
          let value = userCard === card.value;

          return (
            <div
              key={index}
              className={`flex mb-3 flex-row justify-between p-4 rounded-lg border-solid border-2 border-[#D6BBFB] bg-[#F9F5FF]
                ${value ? "bg-[#F9F5FF] " : "bg-[#FFFFFF]"}`}
            >
              <div className="flex flex-row ">
                <div className="mr-3">
                  <Image
                    height={32}
                    alt={card.alt}
                    width={46}
                    src={card.card}
                    className="border-2 border-[#F2F4F7] rounded-md bg-[#FFFFFF]"
                  />
                </div>
                <div className="flex-col flex">
                  <div className="text-[#53389E] text-[14px] font-sans not-italic leading-[20px] font-]">
                    {card.cardEnding}
                  </div>
                  <div className="text-[#7F56D9] font-sans text-[14px] p-[0px] mt-1 leading-[20px] not-italic font-normal">
                    {card.expiryDate}
                  </div>
                  <div className="flex flex-row mt-2">
                    <span className="text-[#9E77ED] text-[14px] leading-[20px] not-italic font-normal mr-2">
                      {card.default}
                    </span>
                    <button className="text-[#6941C6] text-[14px] leading-[20px] not-italic font-normal">
                      {card.edit}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  value={card.value}
                  id={card.id}
                  name="userCard"
                  checked={userCard === card.value}
                  onChange={selectOption}
                  className="border-2 border-[#F2F4F7] rounded-md bg-[#FFFFFF]"
                />
              </div>
            </div>
          );
        })}

        <div className="flex flex-row items-center">
          <span className="mr-2">
            <button className="">
              <Image width={20} height={20} alt="plus" src="/plus.png" />
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

const cardDetails = [
  {
    cardEnding: "Visa ending in 1234",
    expiryDate: "Expiry 06/2024",
    default: "Set as default",
    edit: "Edit",
    card: "/visa.png",
    alt: "visa card",
    value: "Visa",
    id: "visa",
  },
  {
    cardEnding: "   Mastercard ending in 1234",
    expiryDate: "  Expiry 06/2024",
    default: "Set as default",
    edit: "Edit",
    card: "/mastercard.png",
    alt: "master card",
    value: "Master",
    id: "master",
  },
];
