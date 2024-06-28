import { FaAngleRight } from "react-icons/fa";

const FeturesSideMenu = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full m:w-[270px] border">
      <ul className="px-3 w-full">
        {data?.length > 0 &&
          data?.slice(0, 8)?.map((item: any, id: number) => (
            <li
              key={item?.id}
              className={`list-none cursor-pointer w-full md:w-[245px] flex-center-between hover:bg-gray-100 py-3 ${
                id === data?.length - 1 ? "" : "border-b"
              }`}
            >
              <span>{item?.name} </span> <FaAngleRight />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FeturesSideMenu;
