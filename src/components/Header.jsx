"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
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
      setIsScrolled(currentScroll > 0);

      // Показать шапку при прокрутке вверх и скрыть при прокрутке вниз
      if (currentScroll > lastScrollTop && currentScroll > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  return (
    <header
      className={`fixed top-0 z-10 w-full border-4 border-b-[#02AFEF] bg-white py-4 shadow transition-all duration-300 ${
        isScrolled ? "h-24" : "h-24"
      } ${!isVisible && "translate-y-[-100%]"}`}
    >
      <div className="m-auto flex h-full w-[90%] items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={isScrolled ? 50 : 50}
            height={isScrolled ? 50 : 50}
            className="transition-all duration-300"
          />
        </Link>
        <nav>
          <ul className="flex gap-4 text-[20px]">
            <Link href="/">
              <li onClick={scrollToTop}>Home</li>
            </Link>
            <Link href="#aboutSection">
              <li onClick={(e) => handleLinkClick(e, "aboutSection")}>
                Über uns
              </li>
            </Link>
            <Link href="#servicesSection">
              <li onClick={(e) => handleLinkClick(e, "servicesSection")}>
                Services
              </li>
            </Link>
            <Link href="#contactSection">
              <li onClick={(e) => handleLinkClick(e, "contactSection")}>
                Kontakt
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
