import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#0D1D35] text-white py-4">
      <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <p className="bg-[#1B7FED] text-white px-5 py-1 rounded-3xl font-medium">Become a Seller</p>
          <p className="ml-3">Free Express Shipping</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="px-2">
            USD <BiDownArrow className="inline" />
          </p>
          <p  className="px-2">
            EN <BiDownArrow  className="inline"  />
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
