import FeatureMenuBar from "@/components/Featuate/FeatureMenuBar";
import FetureImage from "@/components/Featuate/FetureImage";
import FeturesSideMenu from "@/components/Featuate/FeturesSideMenu";
import { apiHelper } from "@/utils/helper";
import Image from "next/image";

// other product and recommended product component is desinged in layout file using paralel routing concept
export default async function Home() {
  const data = await apiHelper.getAllCategoriedData();
  return (
    <>
      <div>
        <FeatureMenuBar data={data} />
        <div className="layout-width">
          <div className="flex gap-x-5">
            <div className="hidden md:block">
              <FeturesSideMenu data={data} />
            </div>
            <div className="w-full">
              <FetureImage />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-[#FFFFFF] my-5">
        <div className="mt-5 h-[100px]">
          <h2 className="text-center mt-3 text-2xl font-semibold">
            Recommended For You
          </h2>
          <div className="hidden md:block text-center w-[50%] mx-auto mt-0 md:mt-3">
            <ul className="flex-column  md:flex-center-between lg:flex-center-between font-normal">
              <li className="text-[#1B7FED] border-b-2 border-b-[#1B7FED] py-2 font-bold cursor-pointer">
                Featured Products
              </li>
              <li className="cursor-pointer">Top Rated</li>
              <li className="cursor-pointer">Best Selling</li>
              <li className="cursor-pointer">Latest Products</li>
              <li className="cursor-pointer flex">
                New Arrivals{" "}
                <Image
                  src={"/images/new.png"}
                  alt="new tab menu"
                  height={25}
                  width={25}
                  className="ml-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
