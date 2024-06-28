import ProductCart from "@/components/ProductCart";
import { apiHelper } from "@/utils/helper";
import React from "react";

const Recommended = async () => {
  const data = await apiHelper.getAllTopRatedProduct();
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-5 gap-x-4 gap-y-10">
        {data?.products?.map((product: any) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
