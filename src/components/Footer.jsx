import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { services } from "../data/ServicesData";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] pt-20">
      <div className="mx-auto grid w-[80%] grid-cols-3 gap-10">
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
          <p>Seit 1996 in Stuttgart, Esslingen und blablabla</p>
        </div>
        <div>
          <h2>Leistung</h2>
          {services.map((service) => (
            <ul key={service.id}>
              <li>{service.title}</li>
            </ul>
          ))}
        </div>
        <div>
          <h2>Kontakt</h2>
          <p>
            Reinigungsunternehmen Lenart GmbH
            <br />
            Königstr.62,
            <br />
            70173 Stuttgart
          </p>
          <p>+49(0)172-7239933</p>
          <a
            className="rounded-[40px] border border-gray-300 bg-gray-300 p-4"
            href="mailto:info@rulgmbh.de"
          >
            info@rulgmbh.de
          </a>
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
