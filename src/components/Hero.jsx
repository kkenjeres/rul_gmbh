import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/hero.png";
const Hero = () => {
  return (
    <section className="h-screen w-full py-40">
      <div className="m-auto h-full w-[80%] gap-4 md:flex">
        <div className="flex h-full justify-center rounded-xl  bg-[#222222] text-white md:w-[40%]">
          <div className="m-auto flex h-[80%] w-[80%] flex-col justify-between ">
            <h1 className="text-center text-[200px]">R.U.L.</h1>
            <p className="font-spaceGrotesk text-[30px]">
              Ihr Partner für Reinigung & Gebäudemanagement aus{" "}
              <span className="text-bold text-[40px] underline">
                Stuttgartt
              </span>
            </p>
          </div>
        </div>
        <Image
          src={HeroImage}
          alt="Hel"
          objectFit="contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full  rounded-xl  p-4 md:w-[60%] bg-[#222222]"
        ></Image>
      </div>
    </section>
  );
};
export default Hero;
