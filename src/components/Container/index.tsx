import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsGift } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { ConfirmProps } from "../../types";
import Attract from "./attract";

const confirms = [
  {
    icon: <AiOutlineHeart className="w-9 h-9" />,
    title: "Sự hài lòng của khách hàng",
    content: "Đội ngũ nhân viên tư vấn nhiệt tình phản hồi nhanh chóng",
  },
  {
    icon: <BiLike className="w-9 h-9" />,
    title: "Sự hài lòng của khách hàng",
    content: "Đội ngũ nhân viên tư vấn nhiệt tình phản hồi nhanh chóng",
  },
  {
    icon: <IoSettingsOutline className="w-9 h-9" />,
    title: "Đặt Tour dễ dàng nhanh chóng",
    content: "Các thông tin của bạn sẽ được hiển thị chính xác & rõ ràng",
  },
  {
    icon: <BsGift className="w-9 h-9" />,
    title: "Nhiều ưu đãi đặc biệt hấp dẫn",
    content: "Luôn luôn khuyến mãi – sẵn sàng ưu đãi – quà tặng bất ngờ.",
  },
];

const Container = () => {
  return (
    <div className=" max-w-[1160px] mx-auto mt-48">
      <div className="grid grid-cols-12">
        <div className="col-span-5 mt-10">
          <div className="text-[30px] font-light text-[#323C3F] mt-5 mb-[30px]">
            Hãy Đồng hành cùng HolaTech
          </div>
          <div className="space-y-7">
            {confirms.map((item: ConfirmProps, index) => (
              <div className="flex items-start gap-x-5">
                <div className="text-primary">{item.icon}</div>
                <div>
                  <div className="text-[#323C3F] text-lg font-bold">
                    {item.title}
                  </div>
                  <div className="text-[#363636] text-sm">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-7 flex justify-center">
          <img className="h-[560px]" src="./images/banner.jpeg" alt="" />
        </div>
      </div>
      <Attract />
    </div>
  );
};

export default Container;
