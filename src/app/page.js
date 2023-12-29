import Contact from "@/components/Contact";
import Principles from "@/components/Principles";
import { ServicesList } from "@/app/Services/ServiceList.jsx";
import { services } from "../data/ServicesData.js";
export default function Home() {
  return (
    <main className="bg-[#F5F5F7]">
      <Principles />
      <ServicesList services={services} />
      <Contact />
    </main>
  );
}
