import React, { useState } from "react";
import { BsTelephoneFill, BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { LiaTripadvisor } from "react-icons/lia";
import Tab from "../Tab";

export const tabHeader = [
  {
    value: "vietnam",
    content: "VI",
  },
  {
    value: "english",
    content: "EN",
  },
];

const TopNav = () => {
  const [tabValue, setTabValue] = useState<string | null>(tabHeader[0].value);
  return (
    <div className="flex justify-between items-center  ">
      <div className="flex ">
        <div className="flex items-center gap-x-2 py-[14px] pr-8 border-r border-[#E5E5E5]">
          <BsTelephoneFill className="text-primary" />
          <div>(12) 345 6789</div>
        </div>
        <div className="flex items-center gap-x-2 py-[14px] ml-8">
          <GrMail className="text-primary" />
          <div>ngtuandat.15@gmail.com</div>
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <div>
          <div className="flex items-center gap-x-3">
            <FaFacebookF />
            <BiLogoTwitter />
            <LiaTripadvisor />
            <BsInstagram />
          </div>
        </div>
        <div className="space-x-2">
          <button className="text-[15px] text-white bg-primary px-6 py-2 ">
            Đăng nhập
          </button>
          <button className="text-[15px] text-white bg-primary px-6 py-2 ">
            Đăng Kí
          </button>
        </div>
        <div>
          <Tab
            tabs={tabHeader}
            handleChangeValue={setTabValue}
            value={tabValue}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
