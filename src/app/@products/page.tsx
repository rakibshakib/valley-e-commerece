import Cartskeleton from "@/components/Cartskeleton";
import NoData from "@/components/NoData";
import ProductCart from "@/components/ProductCart";
import { apiHelper } from "@/utils/helper";
import Image from "next/image";

const Products = async () => {
  const data = await apiHelper.getAllTopRatedProduct();
  return (
    <div className="layout-width my-10">
      <h1 className="text-2xl border-b-2 font-bold pb-5">All Products</h1>
      {data?.products?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 justify-items-center md:justify-items-start lg:justify-items-start gap-5 my-4">
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

export default Products;
