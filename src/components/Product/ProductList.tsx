"use client";
import React, { useEffect, useState } from "react";
import ProductCart from "../common/ProductCart";
import Image from "next/image";
import { TAB_MENU_LIST, apiHelper } from "@/utils/helper";
import ProductTypeMenu from "../ProductTypeMenu/ProductTypeMenu";
import NoData from "../common/NoData";
import LoadingComp from "../common/Loading";

const ProductList = ({
  isNew = true,
  isRecomandedTab = false,
}: {
  isNew?: boolean;
  isRecomandedTab?: boolean;
}) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("featured");

  useEffect(() => {
    async function fetchData() {
      setData([]);
      const result = await apiHelper.getAllTopRatedProduct({
        type: activeTab,
        setLoading,
      });
      if (result.error) {
        setData([]);
        setError(result.error);
      } else {
        setData(result.products);
      }
    }
    fetchData();
  }, [activeTab]);

  return (
    <>
      {isRecomandedTab && (
        <div className="flex flex-col justify-center bg-[#FFFFFF] my-5">
          <div className="mt-5 h-[100px]">
            <h2 className="text-center mt-10 md:mt-3 text-xl md:text-2xl font-semibold">
              Recommended For You
            </h2>
            <div className="hidden md:block text-center w-[50%] mx-auto mt-0 md:mt-3">
              <ul className="flex-column  md:flex-center-between lg:flex-center-between font-normal">
                {TAB_MENU_LIST?.map((tabMenu) => (
                  <ProductTypeMenu
                    key={tabMenu.type}
                    tabMenu={tabMenu}
                    onclick={() => setActiveTab(tabMenu.type)}
                    selected={activeTab}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {loading ? <LoadingComp /> : <> </>}
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 justify-items-center md:justify-items-start lg:justify-items-start gap-5 my-5">
          {data?.map((product: any) => (
            <ProductCart key={product.id} product={product} isNew={isNew} />
          ))}
        </div>
      ) : (
        !loading && <NoData />
      )}
    </>
  );
};

export default ProductList;
