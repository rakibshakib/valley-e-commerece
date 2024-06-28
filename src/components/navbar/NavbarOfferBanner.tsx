"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

const NavbarOfferBanner = () => {
  const [visable, setVisable] = React.useState(true);
  if (visable)
    return (
      <div
        style={{
          backgroundImage: "url('./images/VectorForNavOffer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "40px",
          // padding: "10px 0",
        }}
      >
        <div className="layout-width">
          <div className="flex justify-between pt-2">
            <IoClose className="inline text-2xl cursor-pointer" onClick={() => setVisable(!visable)} />
            <p className="text-center text-[#005ABC] font-bold text-[12px] md:text-[16px]">
              50% Off On Black Friday For All Stores {`>`} Valid Until 31
              January, 2023
            </p>
            <p></p>
          </div>
        </div>
      </div>
    );
};

export default NavbarOfferBanner;
