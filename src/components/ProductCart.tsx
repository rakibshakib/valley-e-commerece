import { productImg } from "@/utils";
import Image from "next/image";
import React from "react";
import { IoMdFlash } from "react-icons/io";
import Rating from "./Rating";

function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

const ProductCart = ({
  product,
}: {
  product: {
    id: number;
    name: string;
    price: number;
    discount: number;
    rating: {
      average: string;
      product_id: string;
    }[];
    images: string[];
  };
}) => {
  return (
    <div className="w-[228px] rounded-md [box-shadow:rgba(0,_0,_0,_0.1)_0px_4px_6px_-1px,_rgba(0,_0,_0,_0.06)_0px_2px_4px_-1px]">
      <div className="p-[18px] relative">
        <div
          className=""
          style={{
            position: "relative",
            overflow: "hidden",
            height: "175px",
            width: "208px",
            borderRadius: "8px",
          }}
        >
          <Image
            src={`${productImg}/${
              product?.images?.[getRandomIndex(product.images.length)]
            }`}
            alt="6-valley product"
            width={208}
            height={175}
            className="rounded border"
          />
        </div>
        <section className="absolute top-5 left-5">
          <div className="flex justify-between w-[225px]">
            <div>
              <p className="isNew w-[42px] text-[11px] text-center text-white bg-black rounded-md ">
                New
              </p>
              <p className="offTag w-[42px] text-[11px] text-center text-white bg-[#DB2222] rounded-md mt-1">
                -{product?.discount}%
              </p>
            </div>
            <div className="flex justify-end">
              <div className="flash flash-cart">
                <p className="text-center pl-9 pt-3">
                  <IoMdFlash className="text-3xl" />
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="description text-center">
          {/* <span className="text-yellow-500">★★★★★</span> */}
          <Rating rating={+product?.rating?.[0]?.average} />
          <span> (10)</span>

          <p>{product?.name?.slice(0, 20 )}...</p>
          <p>Evening Dress</p>
          <p>
            <s>15$</s> <span>12$</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
