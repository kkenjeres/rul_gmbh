import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaBuffer } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="item-center m-auto flex h-screen flex-col  py-40">
      <h2 className="mb-8 text-center  text-[50px] underline md:text-[80px]">
        Warum R.U.L.? Gute Gründe für uns
      </h2>
      <p className="m-auto w-[60%] text-center text-[20px]">
        RUL steht für individuelle und nachhaltige Reinigungslösungen in
        verschiedenen Bereichen, von Büros bis hin zu Verkaufsräumen. Wir bieten
        maßgeschneiderte Beratung und erstklassige Dienstleistungen. Entscheiden
        Sie sich für Qualität und Professionalität mit RUL.
      </p>
      <div className="m-auto mt-20 flex w-[60%] gap-4 ">
        <div className="flex flex-col items-center justify-center rounded-xl border border-black bg-transparent p-4 text-black">
          <FaRegLightbulb className="mb-6 h-[70px] w-[70px]" />
          <span className="text-center text-[24px]">Langjährige Erfahrung</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-black bg-transparent p-4 text-black">
          <BiSupport className="mb-6 h-[70px] w-[70px]" />
          <span className="text-center text-[24px]">
            24/7 Service Direkter Ansprechspartner
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-black bg-transparent p-4 text-black">
          <FaBuffer className="mb-6 h-[70px] w-[70px]" />
          <span className="text-center text-[24px]">
            Vielseitiges Leistungsspektrum
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-black bg-transparent p-4 text-black">
          <FaUserCog className="mb-6 h-[70px] w-[70px]" />
          <span className="text-center text-[24px]">
            Service auf Kundenwunsch
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
