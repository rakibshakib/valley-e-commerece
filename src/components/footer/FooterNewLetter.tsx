import React from "react";
import { CiMail } from "react-icons/ci";

const FooterNewLetter = () => {
  return (
    <div className="bg-blue-900 text-white flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between  items-center h-[200px] md:h-[120px] px-12 py-3 md:rounded-lg w-[80%] mx-auto">
      <div>
        <h2 className="font-semibold text-xl">News Letter</h2>
        <p className="text-[14px] mt-2">
          Be the first one to know about discount, offer and events
        </p>
      </div>
      <div className="bg-white py-2 px-2 h-[55px] rounded flex items-center mt-5 md:mt-0">
        <span className="px-2">
          <CiMail className="text-black" />
        </span>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="text-black active:outline-none focus:outline-none focus:border-none w-[150px] md:w-[350px] lg:w-[350px]"
        />
        <button
          type="button"
          className="bg-blue-600 px-5 py-2 rounded-md text-white "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FooterNewLetter;
