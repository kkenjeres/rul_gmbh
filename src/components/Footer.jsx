import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { services } from "../data/ServicesData";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex  flex-col justify-between bg-[#02AFEF] pt-20 md:h-[700px]">
      <div className="mx-auto w-[90%] grid-cols-3 gap-10 md:grid md:w-[80%]">
        <div className="space-between flex md:flex-col ">
          <Image src={logo} alt="logo" width={100} height={100} />
          <p className="flex items-center text-[24px]  md:mt-10">
            Seit 1996 in Stuttgart <br /> und Esslingen{" "}
          </p>
        </div>
        <div>
          <h3 className="text-[80px] ">Leistung</h3>
          {services.map((service) => (
            <ul key={service.id}>
              <li className="mb-2 font-spaceGrotesk">{service.title}</li>
            </ul>
          ))}
        </div>
        <div className="">
          <h2 className="text-[80px]">Kontakt</h2>
          <div className="flex flex-col gap-4">
            <p className="font-spaceGrotesk">
              Reinigungsunternehmen Lenart GmbH
              <br />
              Königstr.62,
              <br />
              70173 Stuttgart
            </p>
            <p className="font-spaceGrotesk">+49(0)172-7239933</p>
            <a
              className="rounded-[40px] border border-gray-300 bg-gray-300 p-4 font-spaceGrotesk"
              href="mailto:info@rulgmbh.de"
            >
              info@rulgmbh.de
            </a>
          </div>
        </div>
      </div>
      <div className="m-auto flex w-[80%] justify-between">
        <span>Copyright@2020 RUL Lenart GmbH</span>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </footer>
  );
};

export default Footer;
