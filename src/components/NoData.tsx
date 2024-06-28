import Image from "next/image";
import React from "react";

const NoData = () => {
  return (
    <div className="flex items-center justify-centers">
      <Image
        src="/images/notFound.jpg"
        width={300}
        height={300}
        alt="empty"
        className="block mx-auto"
      />
    </div>
  );
};

export default NoData;
