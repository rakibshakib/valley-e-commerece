"use client";
import Image from "next/image";
import React from "react";

const ProductTypeMenu = ({
  tabMenu,
  onclick,
  selected,
}: {
  tabMenu: ItabMenu;
  onclick: () => void;
  selected: string;
}) => {
  return (
    <>
      <li
        className={`cursor-pointer ${
          selected === tabMenu.type
            ? "text-[#1B7FED] border-b-2 border-b-[#1B7FED] py-2 font-bold"
            : "cursor-pointer"
        } ${tabMenu?.icon ? "flex" : ""}`}
        onClick={onclick}
      >
        {tabMenu.label}
        {tabMenu.icon && (
          <Image
            src={"/images/new.png"}
            alt="new tab menu"
            height={25}
            width={25}
            className="ml-2"
          />
        )}
      </li>
    </>
  );
};

export default ProductTypeMenu;
