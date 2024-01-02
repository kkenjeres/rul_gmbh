import { ServicesList } from "@/components/ServiceList";
import { services } from "../../data/ServicesData";

const Services = () => {
  return (
    <>
      <ServicesList services={services} />
    </>
  );
};

export default Services;
