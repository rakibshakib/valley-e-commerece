export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-[#FFFFFF] mt-5">
      <div className="mt-5 h-[100px]">
        <h2 className="text-center mt-3 text-2xl font-semibold">
          Recommended For You
        </h2>
        <div className="text-center w-[50%] mx-auto mt-3">
          <ul className="flex-column  md:flex-center-between lg:flex-center-between font-bold">
            <li>Featured Products</li>
            <li>Top Rated</li>
            <li>Best Selling</li>
            <li>Latest Products</li>
            <li>New Arrivals</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
