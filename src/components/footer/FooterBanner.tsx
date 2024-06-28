import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const dateSet = [
  {
    id: 1,
    icon: <RiMoneyDollarCircleLine className="text-4xl" />,
    title: "Greate Value",
    description: "We offer competitive prices on over 100 million items",
  },
  {
    id: 2,
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Whole Country Shipping",
    description: "We ship all over the country at any time, anywhere",
  },
  {
    id: 3,
    icon: <MdOutlinePayment className="text-4xl" />,
    title: "Safe Payment",
    description: "Pay with secure payment method",
  },
  {
    id: 4,
    icon: <MdOutlineSupportAgent className="text-4xl" />,
    title: "24/7 Support",
    description: "Pay with secure payment method",
  },
  {
    id: 5,
    icon: <MdOutlineLanguage className="text-4xl" />,
    title: "Multiple Language",
    description: "Our comes with multiple language support",
  },
  {
    id: 6,
    icon: (
      <span className="flex justify-between items-center">
        <FaApple className="text-4xl" /> &nbsp;{" "}
        <IoLogoAndroid className="text-4xl" />
      </span>
    ),
    title: "Multiple Language",
    description: "Our comes with multiple language support",
  },
];

const FooterBanner = () => {
  return (
    <div className="bg-[#F2F3F4] flex items-center flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between layout-width my-10">
      {dateSet?.map((item, index) => (
        <div
          key={item.id}
          className={`w-[300px] h-[180px] pl-2 pr-2 mx-2 ${
            index !== dateSet.length - 1 ? "border-b-2 border-b-gray-200 md:border-b-0 md:border-r-2 md:border-r-gray-200 lg:border-r-gray-20" : ""
          } `}
        >
          <div className={`flex flex-col text-center`}>
            <div className="flex items-center justify-center mt-3">
              {item.icon}
            </div>
            <div className="my-3">
              <h3 className="font-bold text-base">{item.title}</h3>
              <p className="mt-3 text-[12px]">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterBanner;
