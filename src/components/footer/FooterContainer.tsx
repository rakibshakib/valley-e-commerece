import React from "react";
import FooterBanner from "./FooterBanner";
import FooterBottom from "./FooterBottom";
import FooterNewLetter from "./FooterNewLetter";

const FooterContainer = () => {
  return (
    <div className="mt-40">
      <div className="div bg-[#F2F3F4] py-5">
        <FooterBanner />
        <FooterNewLetter />
      </div>
      <FooterBottom />
    </div>
  );
};

export default FooterContainer;
