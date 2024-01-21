"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
import styled from "styled-components";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Предотвратите стандартное поведение ссылки
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth", block: "start" }); // Плавно прокрутите страницу до целевого элемента
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Показываем навигацию при скролле вверх (когда текущая прокрутка меньше предыдущей)
      // и скрываем при скролле вниз
      if (currentScroll < lastScrollTop || currentScroll <= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

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
    <header
      className={`sticky top-0 z-10 w-full bg-white px-4  shadow transition-all duration-300 md:px-0 ${
        isScrolled ? "h-20" : "h-20"
      } ${!isVisible && "translate-y-[0%]"}`}
    >
      <div className="m-auto flex h-full items-center justify-between md:w-[90%]">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={isScrolled ? 80 : 80}
            height={isScrolled ? 80 : 80}
            className="absolute top-0 transition-all duration-300"
          />
        </Link>
        <nav>
          <ul className="flex gap-4 text-[12px] md:text-[20px]">
            <StyledLink href="/">
              <li onClick={scrollToTop}>Home</li>
            </StyledLink>
            <StyledLink href="#uberUsSection">
              <li onClick={(e) => handleLinkClick(e, "uberUsSection")}>
                Über uns
              </li>
            </StyledLink>
            <StyledLink href="#servicesSection">
              <StyledLi onClick={(e) => handleLinkClick(e, "servicesSection")}>
                Leistungen
              </StyledLi>
            </StyledLink>
            <StyledLink href="#contactSection">
              <li onClick={(e) => handleLinkClick(e, "contactSection")}>
                Kontakt
              </li>
            </StyledLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

const StyledLi = styled.li`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background-color: red;
    color: white;
  }
`;
