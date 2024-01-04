import React from "react";
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
  () => import("./Map"),
  { ssr: false }  // Отключение серверного рендеринга для компонента Map
);

import Map from "./Map";
const Location = () => {
  return (
    <section className="bg-gray-100 ">
      <h2 className="py-10 pl-20 text-[180px] underline">Location</h2>
      <p className="my-10 text-center text-[50px]">
        Immer für Sie da!
        <br />
        Sie sind auf der Suche nach einem professionellen und zuverlässigen
        Reinigungsteam? Kontaktieren Sie uns, wir freuen uns auf Ihre Anfrage.
      </p>
      <MapWithNoSSR />
    </section>
  );
};

export default Location;
