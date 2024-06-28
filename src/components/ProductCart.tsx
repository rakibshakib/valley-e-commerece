import { productImg } from "@/utils";
import Image from "next/image";
import React from "react";
import { IoMdFlash } from "react-icons/io";
import Rating from "./Rating";
import { IoEyeOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}
const imageIconHoverList: {
  icon: React.JSX.Element;
  text: string;
  onclick: () => void;
}[] = [
  {
    icon: <FaCartPlus className="text-[13px] " />,
    text: "Add to cart",
    onclick: () => console.log("add to cart"),
  },
  {
    icon: <FaRegHeart className=" text-[13px]" />,
    text: "Add to wishlist",
    onclick: () => console.log("add to wishlist"),
  },
  {
    icon: <MdCompareArrows className=" text-[13px]" />,
    text: "Add to compare",
    onclick: () => console.log("add to compare"),
  },
  {
    icon: <IoEyeOutline className="text-[13px]" />,
    text: "Quick view",
    onclick: () => console.log("quick view"),
  },
];

const ProductCart = ({ product }: { product: IProductCart }) => {
  return (
    <div className="w-[228px] cart-box">
      <div className="p-[10px] relative">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "175px",
            width: "208px",
            borderRadius: "5px",
          }}
          className="group"
        >
          <Image
            src={`${productImg}/${
              product?.images?.[getRandomIndex(product.images.length)]
            }`}
            alt="6-valley product"
            width={208}
            height={175}
            style={{
              width: "100%",
              height: "100%",
            }}
            className="rounded hover:scale-110 hover:transition-all hover:duration-300 ease-[ease-in-out] cursor-pointer group"
          />
          <div className="absolute top-[10px] right-[10px] z-50 hidden group-hover:block group-hover:transition-all group-hover:duration-300 ease-[ease-in-out]">
            <div className="flex flex-col gap-y-2 z-50">
              {imageIconHoverList.map((item, index) => (
                <li
                  key={index}
                  className="list-none bg-white p-2 border border-[#1B7FED] rounded-full shadow-2xl hover:bg-[#1B7FED] hover:text-white cursor-pointer text-[#1B7FED] "
                  // onClick={item.onclick} // not client component
                >
                  {item.icon}
                </li>
              ))}
            </div>
          </div>
        </div>
        <section className="absolute top-[11px] left-[11px] ">
          <div className="flex justify-between w-[225px]">
            <div>
              <p className="isNew w-[42px] text-[11px] text-center text-white bg-black rounded-md ">
                New
              </p>
              <p className="offTag w-[42px] text-[11px] text-center text-white bg-[#DB2222] rounded-md mt-1">
                - {product?.discount}%
              </p>
            </div>
          </div>
        </section>
        <div className="description text-center group mt-3">
          <div className="flex justify-center items-center">
            <Rating rating={+product?.rating?.[0]?.average} />
            <span className="text-[10px] ml-1"> (10)</span>
          </div>

          <p className="group-hover:text-red-600 text-[12px]">
            {product?.product_type}
          </p>
          <p className="group-hover:text-red-600 font-bold">
            {product?.name?.slice(0, 20)}...
          </p>
          <p className="group-hover:text-red-600 ">
            <s>
              <small>{product?.unit_price}$</small>
            </s>{" "}
            <span className="font-bold">{product?.purchase_price}$</span>
          </p>
        </div>
      </div>
      {product?.flash_deal_products?.length > 0 && (
        <div className="absolute top-[0px] left-[152px]">
          <div className="flex justify-end">
            <div className="flash flash-cart">
              <p className="text-center pl-9 pt-3">
                <IoMdFlash className="text-3xl" />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
