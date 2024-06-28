export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-[#FFFFFF] my-5">
      <div className="mt-5 h-[100px]">
        <h2 className="text-center mt-3 text-2xl font-semibold">
          Recommended For You
        </h2>
        <div className="text-center w-[50%] mx-auto mt-3">
          <ul className="flex-column  md:flex-center-between lg:flex-center-between font-normal">
            <li className="text-[#1B7FED] border-b-2 border-b-[#1B7FED] py-2 font-bold cursor-pointer">
              Featured Products
            </li>
            <li className="cursor-pointer">Top Rated</li>
            <li className="cursor-pointer">Best Selling</li>
            <li className="cursor-pointer">Latest Products</li>
            <li className="cursor-pointer">New Arrivals</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
