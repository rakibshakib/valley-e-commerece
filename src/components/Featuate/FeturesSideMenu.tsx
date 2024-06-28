import { apiHelper } from "@/utils/helper";
import { FaAngleRight } from "react-icons/fa";


const FeturesSideMenu = async () => {
  const data = await apiHelper.getAllCategoriedData();
  return (
    <div className="w-[270px] border">
      <ul className="px-3 w-full">
        {data?.slice(0, 8)?.map((item: any, id: number) => (
          <li key={item?.id} className={`list-none cursor-pointer w-[245px] flex-center-between hover:bg-gray-100 py-3 ${id === data?.length - 1 ? "" : "border-b"}`}>
            <span>{item?.name} </span> <FaAngleRight />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeturesSideMenu;
