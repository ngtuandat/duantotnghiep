import React, { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

const ListMenuNavbar = [
  "Home",
  "Rooms",
  "About Us",
  "Pages",
  "News",
  "Contact",
];

const MenuItem = () => {
  const [click, setClick] = useState(ListMenuNavbar[0]);
  const selectMenu = (title: string) => {
    setClick(title);
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <img src="./images/logo1.jpg" alt="" />
      </div>
      <div className="flex items-center">
        <div className="flex gap-x-10 mr-10">
          {ListMenuNavbar.map((item, index) => (
            <div
              onClick={() => selectMenu(item)}
              className="py-7 hover:cursor-pointer"
              key={index}
            >
              <div
                className={` ${
                  click === item
                    ? "border-primary  border-b-2"
                    : "hover:border-b-2 hover:border-primary  border-b-2 border-transparent"
                } `}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
        <div className="ml-10">
          <LiaSearchSolid size={25} />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
