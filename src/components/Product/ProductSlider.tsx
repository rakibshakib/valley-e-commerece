"use client";
import React, { useEffect } from "react";
import ProductCart from "../common/ProductCart";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
interface ImageSliderProps {
  products: any[];
  isNew: boolean; // simply a boolean for checking if the product is new or not
}

const ProductSlider: React.FC<ImageSliderProps> = ({
  products,
  isNew = false,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const prevSlideHandler = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const nextSlideHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden relative w-full h-64 mx-auto">
        {products.map((prod, index) => (
          <div
            key={prod.id}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? "translate-x-25" : "translate-x-full"
            }`}
            style={{ transitionDuration: "500ms" }}
          >
            <div className="flex justify-center items-center">
              <ProductCart key={prod.id} product={prod} isNew={isNew} />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlideHandler}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={nextSlideHandler}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default ProductSlider;
