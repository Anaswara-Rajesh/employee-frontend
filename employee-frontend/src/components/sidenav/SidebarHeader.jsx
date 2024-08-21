import React from "react";
import image from "../../assets/customer.svg";

function SidebarHeader() {
  return (
    <div className="flex items-center justify-center gap-2 px-6 py-5.5 lg:py-7">
      <h2 className="text-[#ec4899]">Employee</h2>
      <a href="#" className="">
        <img src={image} alt="Logo" className="h-[40px]" />
      </a>
      <h2 className="text-[#34d399]">Management</h2>
    </div>
  );
}

export default SidebarHeader;
