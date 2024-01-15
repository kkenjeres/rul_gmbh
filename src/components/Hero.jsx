import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/hero.png";
const Hero = () => {
  return (
    <section
      className="hero-bg h-screen w-full bg-cover bg-center bg-no-repeat"
      id="heroSection"
    >
      {/* Содержимое главного блока */}
      <div className="mx-auto flex h-full items-center justify-center md:w-[30%]">
        <div className="flex h-[80%] w-[90%] flex-col justify-between md:w-full">
          <h1 className="text-center text-[180px] md:text-[200px]">R.U.L.</h1>
          <p className="w-full rounded-lg bg-white/30 p-4 text-center font-spaceGrotesk text-[24px] shadow-md backdrop-blur-md md:text-[30px]">
            Ihr Partner für Reinigung & Gebäudemanagement aus{" "}
            <span className="text-[40px] font-bold underline">Stuttgart</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
