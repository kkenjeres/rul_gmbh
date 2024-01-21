"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { services } from "../data/ServicesData";
import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  const StyledLink = styled(Link)`
    display: inline-block;
    position: relative;
    color: black;
    text-decoration: none;

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: black;
      transition: width 0.3s;
    }

    &::before {
      left: 50%;
    }

    &::after {
      right: 50%;
    }

    &:hover::before {
      width: 50%;
      left: 0;
    }

    &:hover::after {
      width: 50%;
      right: 0;
    }
  `;

  const StyledListItem = styled.li`
    margin-bottom: 2px;
    font-family: "spaceGrotesk", sans-serif;
  `;

  return (
    <footer className="relative  flex h-full flex-col justify-between bg-[#02AFEF] py-10 md:h-[700px]">
      <div className="mx-auto w-[90%] grid-cols-3 gap-10 md:grid md:w-[80%]">
        <div className="">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="h-[50px] w-[40px] md:h-[100px] md:w-[100px]"
          />
          <p className="mt-4 flex items-center text-left text-[24px] md:mt-10">
            Seit 1996 in Stuttgart <br /> und Esslingen{" "}
          </p>
          <small className="absolute bottom-2  text-[10px] md:bottom-10 md:text-[16px]">
            Copyright@2024 RUL Lenart GmbH
          </small>
        </div>
        <div>
          <h3 className="mb-4 mt-10 text-[24px] underline md:mt-0 md:text-[50px]">
            Leistung
          </h3>
          {services.map((service) => (
            <ul key={service.id}>
              <StyledListItem key={service.id}>
                <StyledLink href={`/services/${service.slug}`}>
                  {service.title}
                </StyledLink>
              </StyledListItem>
            </ul>
          ))}
        </div>
        <div className="">
          <h3 className="mb-4 mt-10 text-[24px] underline md:mt-0 md:text-[50px]">
            Kontakt
          </h3>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Reinigungsunternehmen Lenart GmbH</p>
            <p>
              Königstr.62,
              <br />
              70173 Stuttgart
            </p>
            <div className="mb-2 mt-8">
              <p className="font-spaceGrotesk">Mobil: +49(0)172-7239933</p>
              <p className="font-spaceGrotesk">Telefon: +49 (0)711 256 80 20</p>
              <p className="font-spaceGrotesk">Telefax: +49 (0)711 256 80 75</p>
              <a className="" href="mailto:info@rulgmbh.de">
                E-Mail: info@rulgmbh.de
              </a>
            </div>
            <p className="font-bold">Inhaberin/Geschäftsführerin</p>
            <span>Ilona Milinovic</span>
            <div className="mt-4 flex w-full justify-between gap-10">
              <small>
                <span className="font-bold">Registereintrag</span>
                <br />
                Registergericht: Stuttgart
                <br />
                Registernummer: HRB 17654
              </small>
              <small>
                <span className="font-bold">Zuständige Handwerkskammer</span>
                <br />
                Handwerkskammer Region Stuttgart
                <br />
                Heilbronner Straße 43
                <br />
                70191 Stuttgart
              </small>
            </div>
            <Link
              href="/datenschutz"
              className=" absolute bottom-8 flex items-center text-[10px] md:bottom-10 md:text-[16px]"
            >
              | Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
