import React from "react";
import Navbar from "./Navbar";
import NavbarOfferBanner from "./NavbarOfferBanner";
import NavSearchComp from "./NavSearchComp";

const NavbarContaner = () => {
  return (
    <div>
      <NavbarOfferBanner />
      <Navbar />
      <NavSearchComp />
    </div>
  );
};

export default NavbarContaner;
