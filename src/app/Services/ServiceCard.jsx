import React from "react";
import Image from "next/image.js";

const ServiceCard = ({ service }) => {
  // Используйте service вместо services
  return (
    <>
      <div className=" flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-b-2xl text-black shadow-lg brightness-[.3] transition duration-500 ease-in-out hover:scale-105 hover:text-black hover:brightness-[1]">
        <div className=" w-full">
          <Image
            src={service.img}
            alt={service.title}
            width={400}
            height={400}
            className="h-[200px] w-full rounded-t-2xl  	 transition duration-500 ease-in-out"
            objectFit="cover"
          />
        </div>
        <div className="h-[100px] w-full rounded-b-2xl bg-[#F5F5F7] p-4 ">
          <h2 className=" font-spaceGrotesk  text-[20px] ">{service.title}</h2>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
