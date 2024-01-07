import React from "react";
import { Form } from "./Form";
const Contact = () => {
  return (
    <section className="py-40 h-screen" id="contactSection">
      <div className="m-auto flex h-[600px] w-[85%] rounded-xl bg-[#F2F1ED] shadow-xl">
        <div className="flex h-full  w-full flex-col items-center justify-center rounded-l-xl bg-black text-white ">
          <h2 className=" mb-20 text-[50px]">
            Do you have some questions or <br />
            you prefer to order our service?
          </h2>
          <p className="text-[20px] ">Be free to fill out this form</p>
          <p>We will contact you during next 24 hours</p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
