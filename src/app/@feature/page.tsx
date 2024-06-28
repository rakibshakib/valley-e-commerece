import FeatureMenuBar from "@/components/Featuate/FeatureMenuBar";
import FetureImage from "@/components/Featuate/FetureImage";
import FeturesSideMenu from "@/components/Featuate/FeturesSideMenu";

const Feature = () => {
  return (
    <div>
      <FeatureMenuBar />
      <div className="layout-width">
        <div className="flex gap-x-5">
          <div className="hidden md:block">
            <FeturesSideMenu />
          </div>
          <div className="w-full">
            <FetureImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
