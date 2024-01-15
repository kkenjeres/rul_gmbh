import { useState } from "react";
import dynamic from "next/dynamic";
import PopupGoogleMaps from "../components/PopupGoogleMaps";
import { MdLocationOn, MdPhoneInTalk, MdMail } from "react-icons/md";

const MapWithNoSSR = dynamic(() => import("./Map"), { ssr: false });

const Location = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  return (
    <section className=" py-20   text-white md:py-40">
      <h2 className=" text-center  text-[50px] underline md:text-[100px]">
        Location
      </h2>
      <PopupGoogleMaps
        showPopup={showPopup}
        handlePopupClose={handlePopupClose}
      />
      <p className="m-auto w-[90%] rounded-xl pt-8 text-center   text-white md:my-20 md:w-[60%] md:text-[30px]">
        <span className=" text-[30px] md:text-[100px] ">Immer für Sie da!</span>
        <br />
        Sie sind auf der Suche nach einem professionellen und zuverlässigen
        Reinigungsteam? Kontaktieren Sie uns, wir freuen uns auf Ihre Anfrage.
      </p>
      <div className="m-auto w-[90%] gap-4 py-40 md:flex md:w-[80%]">
        <div className="m-auto flex w-[90%] flex-col gap-2  text-[20px] md:w-[40%] md:text-[30px]">
          <div
            onClick={handleButtonClick}
            className="flex h-full w-full cursor-pointer  items-center justify-between border-b border-white p-4  text-white transition duration-300 hover:bg-white hover:text-[#222222] md:p-4"
          >
            <MdLocationOn className="mr-4  md:mb-6 md:text-[40px]" />
            Königstraße 62, <br /> 70173 Stuttgart
          </div>
          <a
            href="tel:+491727239933"
            className="flex h-full w-full cursor-pointer items-center justify-between  border-b border-white p-4  text-white transition duration-300 hover:bg-white hover:text-[#222222] md:p-4"
          >
            <MdPhoneInTalk className="mr-4  md:mb-6 md:text-[40px]" />
            +49(0)172-7239933
          </a>
          <div className="flex h-full w-full cursor-pointer   justify-between border-b border-white p-4  text-white transition duration-300 hover:bg-white hover:text-[#222222] md:p-4">
            <a
              href="mailto:info@rulgmbh.de"
              className="flex h-full w-full items-center justify-between"
            >
              <MdMail className="md:mb-6 md:text-[40px]" />
              info@rulgmbh.de
            </a>
          </div>
        </div>
        <div className="w-full rounded-br-[60px]  p-4">
          <MapWithNoSSR />
        </div>
      </div>
    </section>
  );
};

export default Location;
