import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/hero.png";
const Hero = () => {
  return (
    <section className="h-screen w-full py-40">
      <div className="m-auto md:flex h-full w-[80%] gap-4">
        <div className="flex h-full md:w-[40%] justify-center rounded-xl border  border-black">
          <div className="m-auto flex h-[60%] w-[80%] flex-col items-center justify-between ">
            <h1 className="text-[60px]">Herzlich willkommen bei R.U.L. GmbH</h1>
            <p className="text-[30px]">
              Ihr Partner für Reinigung & Gebäudemanagement aus Stuttgartt
            </p>
          </div>
        </div>
        <Image
          src={HeroImage}
          alt="Hel"
          objectFit="contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full  md:w-[60%] rounded-xl border border-black"
        ></Image>
      </div>
    </section>
  );
};
export default Hero;
