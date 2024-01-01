import ServiceCard from "./ServiceCard.jsx";
export const ServicesList = ({ services }) => {
  return (
    <section className="bg-[#F5F5F7] py-20 ">
      <h2 className="py-10 pl-20 text-[180px] underline">Services</h2>
      <div className="m-auto  grid h-full w-[98%] grid-cols-3 gap-4">
        {services.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            // Чередование размеров каждой пары карточек
            className={` row-span-1 rounded-br-[60px] ${
              Math.floor(i / 2) % 2 === 0
                ? i % 2 === 0
                  ? "col-span-1"
                  : "col-span-2"
                : i % 2 === 0
                  ? "col-span-2"
                  : "col-span-1"
            }`}
          />
        ))}
      </div>
    </section>
  );
};