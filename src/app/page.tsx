import Featuate from "./@feature/page";
import Products from "./@products/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-[#FFFFFF] my-5">
      {/* <Featuate />
      <Products /> */}
      <div className="my-5 h-[150px] bg-gray-400">
        <h2 className="text-center mt-3">Recommended For You</h2>
      </div>
    </div>
  );
}
