import ProductList from "@/components/Product/ProductList";
import ProductSlider from "@/components/Product/ProductSlider";
import NoData from "@/components/common/NoData";
import { apiHelper } from "@/utils/helper";

/**
 * Renders the Recommended component.
 * Fetches the top-rated products from the API and displays them in a product list or slider based on screen size.
 * If there are no products available, displays a "NoData" component.
 *
 */
const Recommended = async () => {
  const data = await apiHelper.getAllTopRatedProduct();
  return (
    <div className="layout-width">
      <div className="hidden md:block">
        <ProductList isNew={true} isRecomandedTab={true} />
      </div>
      {data?.products?.length > 0 ? (
        <div className="md:hidden">
          <ProductSlider products={data.products} isNew={true} />
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Recommended;
