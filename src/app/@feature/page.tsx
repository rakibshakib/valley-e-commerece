import FeatureMenuBar from "@/components/Featuate/FeatureMenuBar";
import FetureImage from "@/components/Featuate/FetureImage";
import FeturesSideMenu from "@/components/Featuate/FeturesSideMenu";

const Feature = () => {
  return (
    <div>
      <FeatureMenuBar />
      <div className="w-[80%] mx-auto">
        <div className="flex gap-x-5">
          <FeturesSideMenu />
         <div className="">
         <FetureImage />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
