"use client";
import { useEffect } from "react";
import { services } from "../../data/ServicesData.js";
import Image from "next/image.js";
import ServiceCard from "./ServiceCard.jsx";
export const ServicesList = ({ services }) => {
  useEffect(() => {
    console.log("ServicesList mounted, services:", services);
  }, [services]);
  return (
    <section className=" py-20">
      <h2 className="py-10 pl-10 text-[180px]">Services</h2>
      <div className="mx-auto grid w-[80%]  grid-cols-3 gap-6  ">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
