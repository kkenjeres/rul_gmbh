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
    <section className="py-40   text-white md:py-40">
      <h2 className=" text-center text-[50px]  underline md:pt-60 md:text-[100px]">
        Immer für Sie da!
      </h2>
      <PopupGoogleMaps
        showPopup={showPopup}
        handlePopupClose={handlePopupClose}
      />
      <p className="m-auto w-[90%] pt-8   text-center text-white md:my-20 md:text-[30px]">
        Um Ihnen die perfekte Lösung bieten zu können, benötigen wir genaue s
        Informationen zu Ihren Anforderungen. Teilen Sie uns mit, wonach Sie
        suchen und Sie erhalten die bestmögliche Unterstützung. Wir freuen uns
        darauf, bald von Ihnen zu hören!
      </p>
      <div className="m-auto w-[90%] gap-4 py-40 md:flex md:w-[80%]">
        <div className="m-auto flex w-[90%] flex-col gap-4  text-[20px] md:w-[40%] md:text-[30px]">
          <div
            onClick={handleButtonClick}
            className="flex h-full w-full cursor-pointer  items-center justify-between border-b border-white p-4   text-[16px] text-white transition duration-300 hover:bg-white hover:text-[#222222] md:p-4 md:text-[24px]"
          >
            Königstraße 62, <br /> 70173 Stuttgart
            <MdLocationOn className="  md:text-[30px]" />
          </div>
          <a
            href="tel:+491727239933"
            className="flex h-full w-full cursor-pointer items-center justify-between  border-b border-white p-4 text-[16px] text-white transition duration-300 hover:bg-white hover:text-[#222222] md:p-4 md:text-[24px]"
          >
            +49(0)172-7239933
            <MdPhoneInTalk className="  md:text-[30px]" />
          </a>
          <div className="flex h-full w-full cursor-pointer  justify-between border-b border-white p-4 text-[16px] text-white  transition duration-300 hover:bg-white hover:text-[#222222] md:p-4 md:text-[24px]">
            <a
              href="mailto:info@rulgmbh.de"
              className="flex h-full w-full items-center justify-between"
            >
              info@rulgmbh.de
              <MdMail className=" md:text-[30px]" />
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
