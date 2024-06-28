import Image from "next/image";
import React from "react";

const FetureImage = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-x-2 gap-y-3 h-[380px]">
      <div
        className="col-span-2 row-span-2"
        style={{
          width: "100%",
          height: "245px",
        }}
      >
        <Image
          src={`/images/Banner.png`}
          alt="6-valley product"
          width={500}
          height={245}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        className="row-span-3"
        style={{
          width: "100%",
          height: "400px",
        }}
      >
        <Image
          src={`/images/Card.png`}
          alt="6-valley product"
          width={200}
          height={400}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        className=""
        style={{
          width: "100%",
          height: "130px",
        }}
      >
        {" "}
        <Image
          src={`/images/thithcho2.png`}
          alt="6-valley product"
          width={200}
          height={130}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        className=""
        style={{
          width: "100%",
          height: "130px",
        }}
      >
        {" "}
        <Image
          src={`/images/thithcho3.png`}
          alt="6-valley product"
          width={250}
          height={130}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default FetureImage;
