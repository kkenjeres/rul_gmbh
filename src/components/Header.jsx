"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 w-full bg-white py-4 shadow transition-all duration-300 ${
        isScrolled ? "h-14" : "h-24"
      }`}
    >
      <div className="m-auto flex h-full w-[80%] items-center justify-between">
        <Image
          src={logo}
          alt="Logo"
          width={isScrolled ? 30 : 50}
          height={isScrolled ? 30 : 50}
          className="transition-all duration-300"
        />
        <nav>
          <ul className="flex gap-4">
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
