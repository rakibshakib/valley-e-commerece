import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";

const FeatureMenuBar = () => {
  return (
    <div className="border-t border-b">
      <div className="w-[80%] mx-auto">
        <div className="flex-column md:flex-center lg:flex-center">
          <div className="flex justify-between items-center bg-[#1B7FED] text-white w-[270px] px-4 py-4">
            <IoIosMenu className="text-2xl" />
            <p>Browser Category</p>
            <IoIosArrowDown />
          </div>
          <div className="ml-28">
            <ul className="flex-column md:flex-center-between lg:flex-center-between py-2 font-bold gap-x-10">
              <li>Home</li>
              <li className="flex-center-between gap-x-3">
                <span>Offer</span> <IoIosArrowDown />
              </li>
              <li className="flex-center-between items-center gap-x-3">
                <span>Store</span> <IoIosArrowDown />
              </li>
              <li className="flex-center-between items-center gap-x-3">
                <span>Brands</span> <IoIosArrowDown />
              </li>
              <li className="flex-center-between items-center gap-x-2">
                <span>Discound Products</span>{" "}
                <RiDiscountPercentFill className="text-[#FFBE00] text-3xl" />
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureMenuBar;
