"use client";
import { usePathname } from "next/navigation";
import { services } from "../../../data/ServicesData";
import Image from "next/image";
import Contact from "@/components/Contact";
export default function ServiceDetails() {
  const pathname = usePathname();
  const pageid = pathname.split("/").pop();

  // Используйте pageid вместо slug для поиска соответствующего сервиса
  const service = services.find((s) => s.slug === pageid);

  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <section className="h-full">
      <div className="m-auto my-40 flex w-[60%] flex-col items-center">
        <p className="text-[100px] underline">{service.title}</p>

        <div className="relative h-[450px] w-full">
          <Image
            src={service.img}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        <p className="mt-10 w-[90%]">{service.description}</p>
      </div>
        <Contact />
    </section>
  );
}
