"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import PopupGoogleMaps from "../components/PopupGoogleMaps";
import {
  MdOutlineArrowDownward,
  MdLocationOn,
  MdPhoneInTalk,
} from "react-icons/md";

const MapWithNoSSR = dynamic(
  () => import("./Map"),
  { ssr: false }, // Отключение серверного рендеринга для компонента Map
);

import Map from "./Map";

const Location = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  console.log(showPopup);
  return (
    <section className="bg-gray-100 ">
      <h2 className="my-40  py-10 text-center text-[200px] underline">
        Location
      </h2>
      <PopupGoogleMaps
        showPopup={showPopup}
        handlePopupClose={handlePopupClose}
      />
      <div className="m-auto w-[80%]">
        <p className="my-20 rounded-xl bg-[#222222] p-10 text-center font-spaceGrotesk text-[30px] text-white">
          <span className="text-[50px]">Immer für Sie da!</span>
          <br />
          Sie sind auf der Suche nach einem professionellen und zuverlässigen
          Reinigungsteam? Kontaktieren Sie uns, wir freuen uns auf Ihre Anfrage.
        </p>
        <div className="m-auto my-10 flex h-[150px] w-[60%] gap-4">
          <div
            onClick={handleButtonClick}
            className="flex h-full w-full cursor-pointer items-center justify-center  rounded-lg border border-[#222222] p-10 text-black transition duration-300  hover:bg-[#222222] hover:text-white"
          >
            <MdLocationOn />
            Königstraße 62, <br /> 70173 Stuttgart
          </div>

          <a
            href="tel:+491727239933"
            className="flex  h-full w-full cursor-pointer items-center justify-center rounded-lg border border-[#222222]  p-10 text-center text-[20px] text-black transition duration-300  hover:bg-[#222222] hover:text-white"
          >
            <MdPhoneInTalk />
            +49(0)172-7239933
          </a>

          <div className=" flex h-full w-full cursor-pointer justify-center  rounded-lg border border-[#222222] p-10 text-black transition duration-300  hover:bg-[#222222] hover:text-white">
            <p className=" flex flex-col  items-center text-[20px]">
              Contact Form
              <MdOutlineArrowDownward className="text-[30px] hover:text-white " />
            </p>
          </div>
        </div>
      </div>
      <MapWithNoSSR />
    </section>
  );
};

export default Location;
