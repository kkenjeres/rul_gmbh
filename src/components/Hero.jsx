import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/hero.svg";
const Hero = () => {
  return (
    <section
      className="hero-bg h-screen w-full bg-cover bg-center bg-no-repeat"
      id="heroSection"
    >
      <div className="mx-auto flex h-full items-center  md:w-[40%]">
        <div className="flex h-[80%] w-[90%] flex-col justify-between md:w-full">
          <p className="text-[30px]">
            <span className="text-[50px] font-bold">Willkommen bei R.U.L.</span>
            <br /> Reinigungsunternehmen Lenart GmbH
          </p>
          <p className="w-full rounded-lg bg-white/30 p-4 text-center  text-[24px] shadow-md backdrop-blur-md md:text-[30px]">
            Ihr Partner für Reinigung & Gebäudemanagement aus{" "}
            <span className="text-[40px] font-bold underline">Stuttgart</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
