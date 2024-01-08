"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "@/components/Contact";
import Principles from "@/components/Principles";
import Location from "@/components/Location";
import { ServicesList } from "@/components/ServiceList.jsx";
import { services } from "../data/ServicesData.js";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import MaskText from "./lib/framer-motion/MaskText.jsx";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const specialPhrase = "R.U.L – Zuverlässig und professionell";

  const phrases = [
    "Mit über 24 Jahren Erfahrung bietet unser Unternehmen in Stuttgart und Umgebung hochwertige Dienstleistungen in den Bereichen Gebäudereinigung und Hausmeisterservice. Unser Ansatz basiert auf individueller Kundenbetreuung und maßgeschneiderten Reinigungskonzepten, abgestimmt auf Ihre spezifischen Anforderungen.",
    "Vertrauen Sie auf unsere Professionalität, um Ihre Immobilien effizient und mit Sorgfalt zu pflegen.",
  ];
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".servicesSection",
      start: "top top",
      endTrigger: ".locationSection", // Указываем конец триггера на начало компонента Location
      end: "top center", // Конец триггера, когда верх Location достигает центра
      onEnter: () => gsap.to(".homeContainer", { backgroundColor: "#222222" }),
      onLeaveBack: () =>
        gsap.to(".homeContainer", { backgroundColor: "#F5F5F7" }),
    });
    ScrollTrigger.create({
      trigger: ".contactSection",
      start: "top center",
      endTrigger: ".locationSection",
      end: "top top",
      onEnter: () => gsap.to(".homeContainer", { backgroundColor: "#F5F5F7" }),
      onLeaveBack: () =>
        gsap.to(".homeContainer", { backgroundColor: "#222222" }),
    });
    ScrollTrigger.create({
      trigger: ".heroSection",
      start: "top center",
      endTrigger: ".aboutSection",
      end: "top top",
      onEnter: () => gsap.to(".homeContainer", { backgroundColor: "#F5F5F7" }),
      onLeaveBack: () => gsap.to(".homeContainer", { backgroundColor: "#fff" }),
    });
  }, []);

  return (
    <div className="homeContainer bg-[#F5F5F7]">
      <Hero />
      <div className="heroSection">
        <MaskText phrases={[specialPhrase, ...phrases]} />
      </div>
      <ServicesList services={services} />
      <div className="servicesSection">
        <Location />
      </div>
      <div className="contactSection">
        <Contact />
      </div>
    </div>
  );
}
