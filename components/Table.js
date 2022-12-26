import React, { useState, useRef } from "react";
import Image from "next/image";

const Table = () => {
  return (
    <div className="my-5">
      <div className="flex md:flex-row md:items-center my-4 flex-col md:justify-between items-start">
        <div className="md:my-0 my-3">Billing history</div>
        <div className="bg-[#FFFFFF] px-[16px] py-[10px] flex flex-row items-center shadow-[0px_1px_2px_rgba(16, 24, 40, 0.05)] rounded-lg border-2 border-solid border-[#D0D5DD]">
          <Image
            width={20}
            height={20}
            src="/../public/downloadcloud.png"
            className="mr-2"
          />
          <span className="not-italic text-[#344054] text-14px] leading-[20px] font-[500]">
            Download all
          </span>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full flex flex-col  border-[#EAECF0] shadow-[0px_4px_8px_-2px_rgba(16, 24, 40, 0.1),_0px_2px_4px_-2px_rgba(16, 24, 40, 0.06)] rounded-lg border-solid border-2 ">
        <div className="flex flex-col">
          <div className="overflow-x-auto relative">
            <div className="inline-block w-full">
              <div className="overflow-x-auto w-full">
                <table className="table-auto w-full">
                  <thead className="border-b border-[#EAECF0] bg-[#F9FAFB]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left flex flex-row items-center"
                      >
                        <span className="mr-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                          />
                        </span>
                        <span className="text-[12px] font-[500] mr-2 leading-[18px] not-italic text-[#667085]">
                          Invoice
                        </span>
                        <span>
                          <Image
                            width={10}
                            height={10}
                            src="/../public/downward.png"
                            className="w-[10px] h-[10px]"
                          />
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="text-[12px] font-[500] leading-[18px] not-italic text-[#667085] whitespace-nowrap px-6 py-3 text-left"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="text-[12px] font-[500] leading-[18px] not-italic text-[#667085] whitespace-nowrap px-6 py-3 text-left"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-[12px] font-[500] leading-[18px] not-italic text-[#667085] px-6 py-3 text-left"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="text-[12px] font-[500] leading-[18px] not-italic text-[#667085] px-6 py-3 text-left"
                      >
                        Users on plan
                      </th>
                      <th
                        scope="col"
                        className="text-[12px] font-[500] leading-[18px] not-italic text-[#667085] px-6 py-3 text-left"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-left  items-center whitespace-nowrap ">
                        <span className="mr-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                          />
                        </span>
                        <span className="text-[#101828] text-[14px] leading-[20px] font-[500] not-italic">
                          Basic Plan - Dec 2022
                        </span>
                      </td>
                      <td className="text-[14px] font-[400] whitespace-nowrap not-italic px-6 py-4 text-[#667085]">
                        USD $10.00
                      </td>
                      <td className="text-[14px] font-[400] whitespace-nowrap not-italic px-6 py-4 text-[#667085]">
                        Dec 1, 2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={55}
                          height={22}
                          src="/../public/Badge.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={124}
                          height={24}
                          src="/../public/usersgroup.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                          <Image
                            width={40}
                            height={40}
                            src="/../public/downloadcloud.png"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 items-center font-medium whitespace-nowrap text-gray-900">
                        <span className="mr-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                          />
                        </span>
                        <span className="text-[#101828] text-[14px] leading-[20px] font-[500] not-italic">
                          Basic Plan - Dec 2022
                        </span>
                      </td>
                      <td className="text-[14px] font-[400] not-italic px-6 py-4 whitespace-nowrap text-[#667085]">
                        USD $10.00
                      </td>
                      <td className="text-[14px] font-[400] not-italic px-6 py-4 whitespace-nowrap text-[#667085]">
                        Dec 1, 2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={55}
                          height={22}
                          src="/../public/Badge.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={124}
                          height={24}
                          src="/../public/usersgroup.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                          <Image
                            width={40}
                            height={40}
                            src="/../public/downloadcloud.png"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 items-center font-medium whitespace-nowrap text-gray-900">
                        <span className="mr-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                          />
                        </span>
                        <span className="text-[#101828] text-[14px] leading-[20px] font-[500] not-italic">
                          Basic Plan - Dec 2022
                        </span>
                      </td>
                      <td className="text-[14px] font-[400] not-italic px-6 py-4 whitespace-nowrap text-[#667085]">
                        USD $10.00
                      </td>
                      <td className="text-[14px] font-[400] not-italic px-6 py-4 whitespace-nowrap text-[#667085]">
                        Dec 1, 2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={55}
                          height={22}
                          src="/../public/Badge.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={124}
                          height={24}
                          src="/../public/usersgroup.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                          <Image
                            width={40}
                            height={40}
                            src="/../public/downloadcloud.png"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b whitespace-nowrap">
                      <td className="px-6 py-4 items-center font-medium text-gray-900">
                        <span className="mr-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                          />
                        </span>
                        <span className="text-[#101828] text-[14px] leading-[20px] font-[500] not-italic">
                          Basic Plan - Dec 2022
                        </span>
                      </td>
                      <td className="text-[14px] font-[400] not-italic px-6 py-4 text-[#667085]">
                        USD $10.00
                      </td>
                      <td className="text-[14px] font-[400] not-italic px-6 py-4 text-[#667085]">
                        Dec 1, 2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={55}
                          height={22}
                          src="/../public/Badge.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={124}
                          height={24}
                          src="/../public/usersgroup.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                          <Image
                            width={40}
                            height={40}
                            src="/../public/downloadcloud.png"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 items-center font-medium text-gray-900">
                        <span className="mr-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                          />
                        </span>
                        <span className="text-[#101828] text-[14px] leading-[20px] font-[500] not-italic">
                          Basic Plan - Dec 2022
                        </span>
                      </td>
                      <td className="text-[14px] font-[400] not-italic px-6 py-4 text-[#667085]">
                        USD $10.00
                      </td>
                      <td className="text-[14px] font-[400] not-italic px-6 py-4 text-[#667085]">
                        Dec 1, 2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={55}
                          height={22}
                          src="/../public/Badge.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={124}
                          height={24}
                          src="/../public/usersgroup.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                          <Image
                            width={40}
                            height={40}
                            src="/../public/downloadcloud.png"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 items-center font-medium text-gray-900">
                        <span className="mr-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                          />
                        </span>
                        <span className="text-[#101828] text-[14px] leading-[20px] font-[500] not-italic">
                          Basic Plan - Dec 2022
                        </span>
                      </td>
                      <td className="text-[14px] font-[400] not-italic whitespace-nowrap px-6 py-4 text-[#667085]">
                        USD $10.00
                      </td>
                      <td className="text-[14px] font-[400] not-italic whitespace-nowrap px-6 py-4 text-[#667085]">
                        Dec 1, 2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={55}
                          height={22}
                          src="/../public/Badge.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={124}
                          height={24}
                          src="/../public/usersgroup.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                          <Image
                            width={40}
                            height={40}
                            src="/../public/downloadcloud.png"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 items-center whitespace-nowrap font-medium text-gray-900">
                        <span className="mr-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] bg-[#FFFFFF] rounded border-2 border-[#D0D5DD]"
                          />
                        </span>
                        <span className="text-[#101828] text-[14px] leading-[20px] font-[500] not-italic">
                          Basic Plan - Dec 2022
                        </span>
                      </td>
                      <td className="text-[14px] font-[400] whitespace-nowrap not-italic px-6 py-4 text-[#667085]">
                        USD $10.00
                      </td>
                      <td className="text-[14px] font-[400] whitespace-nowrap not-italic px-6 py-4 text-[#667085]">
                        Dec 1, 2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={55}
                          height={22}
                          src="/../public/Badge.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Image
                          width={124}
                          height={24}
                          src="/../public/usersgroup.png"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                          <Image
                            width={40}
                            height={40}
                            src="/../public/downloadcloud.png"
                          />
                        </button>
                      </td>
                    </tr>
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
