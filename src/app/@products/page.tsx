import ProductList from "@/components/Product/ProductList";
import ProductSlider from "@/components/Product/ProductSlider";
import NoData from "@/components/common/NoData";
import ProductCart from "@/components/common/ProductCart";
import { apiHelper } from "@/utils/helper";
import Image from "next/image";

const Products = async () => {
  const data = await apiHelper.getAllTopRatedProduct();
  return (
    <div className="layout-width my-10">
      <h1 className="text-2xl border-b-2 font-bold pb-5">All Products</h1>
      {data?.products?.length > 0 ? (
        <>
          <div className="hidden md:block">
            <ProductList products={data.products} />
          </div>
          <div className="md:hidden">
            <ProductSlider products={data.products} isNew={false} />
          </div>
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Products;
