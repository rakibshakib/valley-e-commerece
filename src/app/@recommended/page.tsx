import ProductList from "@/components/Product/ProductList";
import ProductSlider from "@/components/Product/ProductSlider";
import NoData from "@/components/common/NoData";
import { apiHelper } from "@/utils/helper";

const Recommended = async () => {
  const data = await apiHelper.getAllTopRatedProduct();
  return (
    <div className="layout-width">
      {data?.products?.length > 0 ? (
        <>
          <div className="hidden md:block">
            <ProductList products={data.products} isNew={true} />
          </div>
          <div className="md:hidden">
            <ProductSlider products={data.products}  isNew={true} />
          </div>
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Recommended;
