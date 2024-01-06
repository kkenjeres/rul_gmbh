import React from "react";

const PopupGoogleMaps = ({ showPopup, handlePopupClose }) => {
  return (
    showPopup && (
      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 m-auto h-[40%] w-[80%] bg-gray-400 p-10 md:w-[40%]">
        <p className="text-center text-[80px] font-bold ">
          Open in google maps?
        </p>
        <div className="flex justify-between border-t border-black">
          <button
            className="h-[100px] w-full border-r border-black transition duration-300 hover:bg-[#f8f8f8]"
            onClick={() =>
              (window.location.href =
                "https://www.google.com/maps/dir/?api=1&destination=Königstraße%2062,%2070173%20Stuttgart")
            }
          >
            Ja
          </button>
          <button
            className="w-full transition duration-300 hover:bg-[#f8f8f8]"
            onClick={handlePopupClose}
          >
            Nein
          </button>
        </div>
      </div>
    )
  );
};

export default PopupGoogleMaps;
