import React from "react";
import Image from "next/image.js";
import { GoArrowUpRight } from "react-icons/go";

const ServiceCard = ({ service, className }) => {
  return (
    <div
      className={`${className} group relative h-[700px] cursor-pointer overflow-hidden text-black shadow-lg transition duration-500 ease-in-out `}
    >
      <Image
        src={service.img}
        alt={service.title}
        layout="fill"
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="transform-gpu rounded-br-[60px] transition duration-500 ease-in-out hover:scale-[1.03]"
      />
      <div className="absolute bottom-20 left-0 flex h-[100px] w-[70%] items-center overflow-hidden rounded-br-[40px] bg-[#02AFEF] px-10">
        <div className="absolute left-0 h-full w-0 bg-[#215568] transition-all duration-300 ease-in-out group-hover:w-full "></div>
        <h3 className="z-2 relative flex w-full items-center justify-between font-spaceGrotesk text-[24px] font-normal transition duration-300 group-hover:text-white">
          {service.title}
          <GoArrowUpRight className="z-2 relative text-[30px] group-hover:fill-white" />
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
