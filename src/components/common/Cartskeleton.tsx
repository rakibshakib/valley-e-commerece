import React from "react";

const Cartskeleton = () => {
  return (
    <div className="w-[228px] rounded-md mt-12 skeleton-cart">
      <div className="p-[18px] relative">
        <div
          className=""
          style={{
            position: "relative",
            overflow: "hidden",
            height: "175px",
            width: "208px",
            borderRadius: "8px",
            background:
              "linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px)", // Gray background color
            animation: "animation 1.5s infinite",
          }}
        />

        <div className="description text-center ">
          <div
            className="skeleton-element"
            style={{ width: "50px", height: "15px", margin: "10px auto" }}
          />{" "}
          {/* Product name */}
          <div
            className="skeleton-element"
            style={{ width: "100px", height: "10px", margin: "10px auto" }}
          />{" "}
          {/* Product category */}
          <div
            className="skeleton-element"
            style={{ width: "120px", height: "15px", margin: "10px auto" }}
          />
          {/* Product category */}
          <div
            className="skeleton-element"
            style={{ width: "40px", height: "10px", margin: "10px auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cartskeleton;
