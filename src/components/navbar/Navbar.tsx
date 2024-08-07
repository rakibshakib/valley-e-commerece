import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-[#0D1D35] text-white py-4 w-full">
      <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center layout-width">
        <div className="flex justify-between items-center">
          <p className="bg-[#1B7FED] text-white px-5 py-1 rounded-3xl font-medium text-[12px] md:text-[16px]">Become a Seller</p>
          <p className="ml-3 text-[12px] md:text-[16px]">Free Express Shipping</p>
        </div>
        <div className="flex justify-between items-center text-[12px] md:text-[16px] mt-2 md:mt-0">
          <p className="px-2">
    
            USD <IoIosArrowDown className="inline" />
          </p>
          <p  className="px-2">
            EN  <IoIosArrowDown className="inline" />
          </p>
          <p  className="px-2">
            <FaTwitter className="text-xl" />
          </p>
          <p  className="px-2">
            <FaFacebook className="text-xl" />
          </p>
          <p className="px-2">
            <FaInstagram className="text-xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
