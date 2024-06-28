
"use client"
import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import FeturesSideMenu from "./FeturesSideMenu";

const FeatureMenuBar = ({data = []} : {data?: any[]}) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="border-t border-b">
      <div className="w-full md:layout-width lg:layout-width  mx-auto">
        <div className="flex-column md:flex-center lg:flex-center">
          <div className="flex justify-between items-center bg-[#1B7FED] text-white w-full md:w-[270px] lg:w-[270px] px-4 py-4">
            <IoIosMenu
              className="text-2xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <p>Browser Category</p>
            <IoIosArrowDown className="cursor-pointer" onClick={() => setToggle(!toggle)} />
          </div>
          <div className="w-full md:hidden block">
            {toggle && <FeturesSideMenu data={data} />}
          </div>
          <div className="ml-5 md:ml-28 lg:ml-28 hidden md:block lg:block">
            <ul className="flex-column md:flex-center-between lg:flex-center-between py-2 font-bold gap-x-10">
              <li>Home</li>
              <li className="flex flex-row justify-start md:flex-center-between lg:flex-center-between gap-x-3">
                <span>Offer</span> <IoIosArrowDown />
              </li>
              <li className="flex flex-row justify-start md:flex-center-between lg:flex-center-between gap-x-3">
                <span>Store</span> <IoIosArrowDown />
              </li>
              <li className="flex flex-row justify-start md:flex-center-between lg:flex-center-between gap-x-3">
                <span>Brands</span> <IoIosArrowDown />
              </li>
              <li className="flex flex-row justify-start md:flex-center-between lg:flex-center-between gap-x-2">
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
