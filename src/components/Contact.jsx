import React from "react";
import { Form } from "./Form";
const Contact = () => {
  return (
    <section
      className="py-40  md:h-screen"
      id="contactSection"
    >
      <div className="m-auto w-[90%] rounded-b-xl  bg-[#F2F1ED] shadow-xl md:flex md:h-[600px] md:w-[85%] ">
        <div className="flex h-full w-full  flex-col items-center justify-center rounded-xl bg-black py-10 text-white md:rounded-l-xl ">
          <h2 className=" mb-20 text-[20px] text-[#01AEEF] md:text-[50px]">
            Do you have some questions or <br />
            you prefer to order our service?
          </h2>
          <p className="text-[20px] text-[#01AEEF]">
            Be free to fill out this form
          </p>
          <p className="text-[#01AEEF]">
            We will contact you during next 24 hours
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
