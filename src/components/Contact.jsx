import React from "react";
import { Form } from "./Form";
const Contact = () => {
  return (
    <section className="py-40  md:h-screen" id="contactSection">
      <div className="m-auto w-[90%] rounded-b-xl  bg-[#F2F1ED] shadow-xl md:flex md:h-[600px] md:w-[85%] ">
        <div className="flex h-full w-full  flex-col items-center justify-center rounded-xl bg-black py-10 text-white md:rounded-l-xl ">
          <h2 className=" mb-20 text-center text-[20px] text-[#01AEEF] md:text-[40px]">
            Haben Sie Fragen oder möchten <br />
            Sie unseren Service in Anspruch nehmen?
          </h2>
          <p className="text-[20px] text-[#01AEEF]">
            Fühlen Sie sich frei, dieses Formular auszufüllen.
          </p>
          <p className="text-[#01AEEF]">
            Wir werden Sie innerhalb der nächsten 24 Stunden kontaktieren.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
