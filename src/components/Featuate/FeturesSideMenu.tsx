import { baseAPI } from "@/utils";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";


async function getData() {
  try {
    const res = await fetch(`${baseAPI}/categories?guest_id=1`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const FeturesSideMenu = async () => {
  const data = await getData();
  return (
    <div className="w-[270px] border">
      <ul className="px-3">
        {data?.slice(0, 8)?.map((item: any, id: number) => (
          <li key={item?.id} className={` cursor-pointer flex-center-between hover:bg-gray-100 py-3 ${id === data?.length - 1 ? "" : "border-b"}`}>
            <span>{item?.name} </span> <FaAngleRight />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeturesSideMenu;
