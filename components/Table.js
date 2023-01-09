import React from "react";
import TableBody from "../utils/TableDetails";
import { TableHeaders } from "../utils/TableDetails";
import Image from "next/image";

const Table = () => {
  return (
    <div className="md:mt-11 mt-8">
      <div className="flex md:flex-row md:items-center px-4 md:px-0 mb-4 flex-col md:justify-between items-start">
        <div className="md:my-0 my-3 text-[#101828] font-sans font-medium text-[18px] not-italic">
          Billing history
        </div>
        <div className="bg-[#FFFFFF] px-4 py-[10px] flex flex-row items-center shadow-[0px_1px_2px_rgba(16, 24, 40, 0.05)] rounded-lg border-2 border-solid border-[#D0D5DD]">
          <Image
            width={20}
            height={20}
            alt="download"
            src="/downloadcloud.png"
            className="mr-2"
          />
          <span className="not-italic text-[#344054] text-14px] leading-[20px] font-sans font-medium">
            Download all
          </span>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full flex flex-col border-[#EAECF0] shadow-[0px_4px_8px_-2px_rgba(16, 24, 40, 0.1),_0px_2px_4px_-2px_rgba(16, 24, 40, 0.06)] rounded-lg border-solid border-2 ">
        <div className="flex flex-col">
          <div className="overflow-x-auto relative">
            <div className="inline-block w-full">
              <div className="overflow-x-auto w-full">
                <table className="table-auto w-full">
                  <thead className="border-b border-[#EAECF0] bg-[#F9FAFB]">
                    {TableHeaders.map((item, index) => (
                      <tr key={index}>
                        <th scope="col">
                          <div className="pl-6 py-3 text-left flex flex-row items-center">
                            <span className="mr-3">
                              <input
                                type="checkbox"
                                className="w-[16px] h-[16px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                              />
                            </span>
                            <span className="text-[12px] font-[500] mr-2 font-sans leading-[18px] not-italic text-[#667085]">
                              Invoice
                            </span>

                            <Image
                              width={16}
                              alt="download"
                              height={16}
                              src="/arrow-down.svg"
                            />
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="text-[12px] font-[500] leading-[18px] font-sans not-italic text-[#667085] whitespace-nowrap pl-6 py-3 text-left"
                        >
                          {item.secondTh}
                        </th>
                        <th
                          scope="col"
                          className="text-[12px] font-[500] leading-[18px] font-sans not-italic text-[#667085] whitespace-nowrap pl-6 py-3 text-left"
                        >
                          {item.thirdTh}
                        </th>
                        <th
                          scope="col"
                          className="text-[12px] font-[500] leading-[18px] font-sans not-italic text-[#667085] pl-6 py-3 text-left"
                        >
                          {item.fourthTh}
                        </th>
                        <th
                          scope="col"
                          className="text-[12px] font-[500] leading-[18px] font-sans not-italic text-[#667085] pl-6 py-3 text-left"
                        >
                          <div className="w-[172px]">{item.fifthTh}</div>
                        </th>
                        <th
                          scope="col"
                          className="text-[12px] font-[500] leading-[18px] font-sans not-italic text-[#667085] pl-6 py-3 text-left"
                        ></th>
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {TableBody.map((body, index) => (
                      <tr className="border-b" key={index}>
                        <td className="px-6 py-4 text-left w-[495px] items-center whitespace-nowrap">
                          <div className="flex items-center flex-row">
                            <span className="mr-3">
                              <input
                                type="checkbox"
                                className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                              />
                            </span>
                            <span className="text-[#101828] font-sans text-[14px] leading-[20px] font-[500] not-italic">
                              Basic Plan - Dec 2022
                            </span>
                          </div>
                        </td>
                        <td className="text-[14px] w-[127px] font-sans font-[400] whitespace-nowrap not-italic px-6 py-4 text-[#667085]">
                          {body.secondCell}
                        </td>
                        <td className="text-[14px] w-[127px] font-sans font-[400] whitespace-nowrap not-italic px-6 py-4 text-[#667085]">
                          {body.thridCell}
                        </td>
                        <td className="text-sm w-[103px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <Image
                            width={55}
                            alt="badge"
                            height={22}
                            src={body.fourthCell}
                          />
                        </td>
                        <td className="text-sm text-gray-900 w-[172px] font-light px-6 py-4 whitespace-nowrap">
                          <Image
                            alt="usersgroup"
                            width={124}
                            height={24}
                            src={body.fifthCell}
                          />
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6  py-4 whitespace-nowrap">
                          <button className="w-[72px]">
                            <Image
                              width={72}
                              height={72}
                              alt="download"
                              src={body.sixthCell}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
