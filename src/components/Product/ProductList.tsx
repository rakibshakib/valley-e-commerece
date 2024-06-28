import React from "react";
import ProductCart from "../common/ProductCart";

const ProductList = ({
  products,
  isNew = true,
}: {
  products: any[];
  isNew?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 justify-items-center md:justify-items-start lg:justify-items-start gap-5 my-4">
      {products?.map((product: any) => (
        <ProductCart key={product.id} product={product} isNew={isNew} />
      ))}
    </div>
  );
};

export default ProductList;
