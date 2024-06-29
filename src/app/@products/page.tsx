import ProductList from "@/components/Product/ProductList";
import ProductSlider from "@/components/Product/ProductSlider";
import NoData from "@/components/common/NoData";
import { apiHelper } from "@/utils/helper";

/**
 * Fetches the top-rated products from the API and displays them in a product list or slider based on screen size.
 * If there are no products available, displays a "NoData" component.
 *
 */
const Products = async () => {
  const data = await apiHelper.getAllTopRatedProduct();
  return (
    <div className="layout-width my-10">
      <h1 className="text-2xl border-b-2 font-bold pb-5 ml-2 mb:mb-0 mb-10 mb:ml-0">
        All Products
      </h1>

      <div className="hidden md:block">
        <ProductList isNew={false} isRecomandedTab={false} />
      </div>
      {data?.products?.length > 0 ? (
        <div className="md:hidden">
          <ProductSlider products={data.products} isNew={false} />
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Products;
