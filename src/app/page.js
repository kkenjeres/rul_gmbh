import Contact from "@/components/Contact";
import Principles from "@/components/Principles";
import Location from "@/components/Location";
import { ServicesList } from "@/components/ServiceList.jsx";
import { services } from "../data/ServicesData.js";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";

export default function Home() {
  return (
    <main className="bg-[#F5F5F7]">
      <Hero />
      <About />
      <ServicesList services={services} />
      <Principles />
      <Location />
      <Contact />
    </main>
  );
}
