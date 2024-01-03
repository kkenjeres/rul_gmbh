import React from "react";
import Map from "./Map";
const Location = () => {
  return (
    <section className="bg-gray-100 ">
      <h2 className="py-10 pl-20 text-[180px] underline">Location</h2>
      <p className="text-center text-[50px] my-10">
        Immer für Sie da!
        <br />
         Sie sind auf der Suche nach einem professionellen und zuverlässigen
        Reinigungsteam? Kontaktieren Sie uns, wir freuen uns auf Ihre Anfrage.
      </p>
      <Map />
    </section>
  );
};

export default Location;
