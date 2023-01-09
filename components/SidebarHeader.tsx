import React from "react";
import Image from "next/image";
const SidebarHeader = () => {
  return (
    <div className="pt-8 pl-6 mb-6">
      <Image src="/Logo.svg" width={143} height={32} alt="logo" />
    </div>
  );
};

export default SidebarHeader;
