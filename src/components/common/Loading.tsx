import React from "react";
import Cartskeleton from "./Cartskeleton";

const LoadingComp = () => {
  return (
    <div className="layout-width">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 justify-items-center md:justify-items-start lg:justify-items-start gap-x-4 gap-y-10">
        {Array.from({ length: 10 })
          .fill(null)
          ?.map((arr: any) => (
            <Cartskeleton key={arr} />
          ))}
      </div>
    </div>
  );
};

export default LoadingComp;
