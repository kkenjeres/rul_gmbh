import React from "react";
import { Form } from "./Form";
const Contact = () => {
  return (
    <section className="py-40  md:h-screen" id="contactSection">
      <div className="m-auto w-[90%]  rounded-xl bg-[#3DAEEF] shadow-2xl md:flex md:h-[600px] md:w-[85%]">
        <div className="flex h-full w-full  flex-col items-center justify-center  rounded-l-xl  bg-transparent py-10 text-white ">
          <h2 className=" mb-20 text-center text-[20px] text-white md:text-[40px]">
            Haben Sie Fragen oder möchten <br />
            Sie unseren Service in Anspruch nehmen?
          </h2>
          <p className="text-[20px] text-white">
            Fühlen Sie sich frei, dieses Formular auszufüllen.
          </p>
          <p className="text-white">
            Wir werden Sie innerhalb der nächsten 24 Stunden kontaktieren.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
