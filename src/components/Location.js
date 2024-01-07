import { useState } from "react";
import dynamic from "next/dynamic";
import PopupGoogleMaps from "../components/PopupGoogleMaps";
import {
  MdLocationOn,
  MdPhoneInTalk,
  MdOutlineArrowDownward,
} from "react-icons/md";

const MapWithNoSSR = dynamic(() => import("./Map"), { ssr: false });

const Location = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  return (
    <section className=" py-40 text-white">
      <h2 className="text-center text-[30vw] underline">Location</h2>
      <PopupGoogleMaps
        showPopup={showPopup}
        handlePopupClose={handlePopupClose}
      />
      <p className="m-auto my-20 w-[60%] rounded-xl p-10 text-center font-spaceGrotesk text-[30px] text-white">
        <span className="text-[100px] ">Immer für Sie da!</span>
        <br />
        Sie sind auf der Suche nach einem professionellen und zuverlässigen
        Reinigungsteam? Kontaktieren Sie uns, wir freuen uns auf Ihre Anfrage.
      </p>
      <div className="m-auto flex w-[80%] gap-4 py-40">
        <div className="m-auto flex w-[40%] flex-col gap-2 rounded-br-[60px] rounded-tl-[60px] border p-4">
          <div
            onClick={handleButtonClick}
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-tl-[60px] border border-white p-4 text-[24px] text-white transition duration-300 hover:bg-white hover:text-[#222222]"
          >
            <MdLocationOn className="mb-10 text-[40px]" />
            Königstraße 62, <br /> 70173 Stuttgart
          </div>
          <a
            href="tel:+491727239933"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center border border-white p-4 text-[24px] text-white transition duration-300 hover:bg-white hover:text-[#222222]"
          >
            <MdPhoneInTalk className="mb-10 text-[40px]" />
            +49(0)172-7239933
          </a>
          <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-br-[60px] border border-white p-4 text-[24px] text-white transition duration-300 hover:bg-white hover:text-[#222222]">
            <p className="flex flex-col items-center text-[24px]">
              Contact Form
              <MdOutlineArrowDownward className="mt-10 text-[40px]" />
            </p>
          </div>
        </div>
        <div className="w-full rounded-bl-[60px] border border-white p-4">
          <MapWithNoSSR />
        </div>
      </div>
    </section>
  );
};

export default Location;
