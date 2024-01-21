import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/hero.svg";
import { MdLocationOn, MdPhoneInTalk, MdMail } from "react-icons/md";

const Hero = () => {
  return (
    <section
      className="hero-bg relative h-screen w-full bg-cover bg-center bg-no-repeat"
      id="heroSection"
    >
      <div className="relative top-10 rounded-lg bg-white/30 p-8 shadow-md backdrop-blur-md md:left-40 md:top-40 md:w-[30%] ">
        <p className="  text-center  text-[24px]  md:text-[26px]">
          <span className="text-[40px] font-bold">Willkommen bei R.U.L.</span>
          <br /> Reinigungsunternehmen Lenart GmbH
          <br /> Ihr Partner für Reinigung & Gebäudemanagement aus{" "}
          <span className="text-[30px] font-bold underline">Stuttgart</span>
        </p>
      </div>
      <div className="absolute bottom-0  w-full items-center justify-between space-y-4 bg-[#001d6c] px-10 py-10 md:flex md:space-y-0 md:px-40">
        <div>
          <a
            href="tel:+491727239933"
            className="flex h-full w-full cursor-pointer items-center justify-between    text-white  "
          >
            <MdPhoneInTalk className="mr-2 md:text-[40px]" />
            +49(0)172-7239933
          </a>
        </div>
        <div>
          <div className="flex h-full w-full cursor-pointer  items-center justify-between  text-white   ">
            <MdLocationOn className="mr-2  md:text-[40px]" />
            Königstraße 62, <br /> 70173 Stuttgart
          </div>
        </div>
        <div>
          <a
            href="mailto:info@rulgmbh.de"
            className="flex h-full w-full cursor-pointer  items-center justify-between  text-white"
          >
            <MdMail className="mr-2 md:text-[40px]" />
            info@rulgmbh.de
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
