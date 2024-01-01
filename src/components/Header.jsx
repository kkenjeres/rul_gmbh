"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    className={`fixed top-0 z-10 w-full bg-white py-4 shadow transition-all duration-300 border-4 border-b-[#02AFEF] ${
      isScrolled ? "h-24" : "h-24"
    } ${!isVisible && 'translate-y-[-100%]'}`}
  >
      <div className="m-auto flex h-full w-[90%] items-center justify-between">
        <Image
          src={logo}
          alt="Logo"
          width={isScrolled ? 50 : 50}
          height={isScrolled ? 50 : 50}
          className="transition-all duration-300"
        />
        <nav>
          <ul className="flex gap-4 text-[20px]">
            <li>Home</li>
            <li>Über uns</li>
            <li>Warum Uns</li>
            <li>Kontakt</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
