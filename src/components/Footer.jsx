import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { services } from "../data/ServicesData";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="flex  flex-col justify-between bg-[#02AFEF] py-10 md:h-[700px]">
      <div className="mx-auto w-[90%] grid-cols-3 gap-10 md:grid md:w-[80%]">
        <div className="space-between mb-10 flex md:flex-col">
          <Image src={logo} alt="logo" width={100} height={100} />
          <p className="flex items-center text-right text-[24px] md:mt-10">
            Seit 1996 in Stuttgart <br /> und Esslingen{" "}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-[30px] underline md:text-[60px]">
            Leistung
          </h3>
          {services.map((service) => (
            <ul key={service.id}>
              <li className="mb-2 font-spaceGrotesk">{service.title}</li>
            </ul>
          ))}
        </div>
        <div className="">
          <h2 className="mb-4 text-[30px] underline md:text-[60px]">Kontakt</h2>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Reinigungsunternehmen Lenart GmbH</p>
            <p>
              Königstr.62,
              <br />
              70173 Stuttgart
            </p>
            <p className="font-spaceGrotesk">+49(0)172-7239933</p>
            <a className="" href="mailto:info@rulgmbh.de">
              info@rulgmbh.de
            </a>
          </div>
          <Link
            href="/datenschutz"
            className="mt-4 flex items-center text-[20px] md:mt-0"
          >
            | Datenschutz
            <GoArrowUpRight className="ml-2" />
          </Link>
        </div>
        <span className="text-[10px] ">Copyright@2020 RUL Lenart GmbH</span>
      </div>
    </footer>
  );
};

export default Footer;
