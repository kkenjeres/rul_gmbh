import Link from "next/link.js";
import ServiceCard from "./ServiceCard.jsx";
export const ServicesList = ({ services }) => {
  return (
    <section className="bg-[#F5F5F7] py-40" id="servicesSection">
      <h2 className=" text-[50px] text-center underline">Services</h2>
      <div className="m-auto grid h-[full] w-[98%] md:grid-cols-3 gap-4 pt-20 md:pt-40">
        {services.map((service, i) => (
          <Link href={`/services/${service.slug}`} key={service.id}>
            <ServiceCard
              key={service.id}
              service={service}
              className={`row-span-1 rounded-br-[60px] ${
                i === services.length - 1
                  ? "col-span-3"
                  : Math.floor(i / 2) % 2 === 0
                    ? i % 2 === 0
                      ? "col-span-1"
                      : "col-span-2"
                    : i % 2 === 0
                      ? "col-span-2"
                      : "col-span-1"
              }`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
