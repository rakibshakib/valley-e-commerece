import NoData from "@/components/NoData";
import ProductCart from "@/components/ProductCart";
import { apiHelper } from "@/utils/helper";
import React from "react";

const Recommended = async () => {
  const data = await apiHelper.getAllTopRatedProduct();
  return (
    <div className="layout-width">
      {data?.products?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 justify-items-center md:justify-items-start lg:justify-items-start gap-x-4 gap-y-10">
          {data?.products?.map((product: any) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Recommended;
