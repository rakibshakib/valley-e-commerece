import React from "react";
import FooterBanner from "./FooterBanner";
import FooterBottom from "./FooterBottom";
import FooterNewLetter from "./FooterNewLetter";

const FooterContainer = () => {
  return (
    <div className="mt-10">
      <FooterBanner />
      <FooterNewLetter />
      <FooterBottom />
    </div>
  );
};

export default FooterContainer;
