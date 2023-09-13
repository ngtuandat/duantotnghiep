import React from "react";
import MenuItem from "./menu-item";
import TopNav from "./top-nav";

const Header = () => {
  return (
    <div className="sticky top-0 z-20">
      <div className="border-b border-[#E5E5E5] bg-white">
        <div className="max-w-[1160px] mx-auto">
          <TopNav />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1160px] mx-auto">
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default Header;
