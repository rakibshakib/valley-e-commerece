import Image from "next/image";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const NavSearchComp = () => {
  return (
    <div className="layout-width">
      <div className="flex-column  md:flex-center-between lg:flex-center-between py-5">
        <div>
          <Image
            src="/images/6vally-logo.png"
            width={160}
            height={80}
            alt="logo"
          />
        </div>
        <div className="flex justify-between items-center border rounded-3xl">
          <div className="border-r-2 mr-2 px-2 py-2 flex justify-between items-center">
            <IoIosMenu className="text-xl mx-2" />
            <IoIosArrowDown className="text-xl" />
          </div>
          <input
            type="text"
            name=""
            id=""
            className=" py-2 active:outline-none focus:outline-none focus:border-none w-[150px] px-2 md:w-[450px] lg:w-[350px]"
            placeholder="Search for items or store..."
          />
          <p className="bg-[#1B7FED] rounded-tr-3xl rounded-br-3xl h-[30px] w-[50px] mr-1 flex items-center justify-center">
            <IoIosSearch className="text-white text-center text-xl" />
          </p>
        </div>
        <div className="flex justify-between items-center gap-8 text-2xl text-gray-700 mt-10 md:mt-0 lg:mt-0">
          <p>
            <FaRegUserCircle />
          </p>
          <p className="border-l-2 pl-3 relative">
            <MdCompareArrows />
            <span className="bg-blue-600 px-1 w-[18px] h-[18px] text-[10px] rounded-full text-white absolute border-white border-3 text-center top-[-8px] left-7">
              3
            </span>
          </p>
          <p className="border-l-2 pl-3 relative">
            <FaCartPlus />
            <span className="bg-blue-600 px-1 w-[18px] h-[18px] text-[10px] rounded-full text-white absolute border-white border-3 text-center top-[-8px] left-7">
              7
            </span>
          </p>
          <p className="border-l-2 pl-3 relative">
            <FaRegHeart />
            <span className="bg-blue-600 px-1  w-[18px] h-[18px]  text-[10px] rounded-full text-white absolute border-white border-3 text-center top-[-8px] left-7">
              2
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavSearchComp;
