"use client";
import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      companyName: "",
      message: "",
    });
  };
  return (
    <div className="m-auto flex justify-center py-10  md:py-0 ">
      <div className="flex w-[80%] flex-col justify-between ">
        <form className="flex flex-col gap-2  text-[20px]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-black p-2 text-[16px]"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-black p-2 text-[16px]"
          />

          <label htmlFor="companyName">Telefon</label>
          <input
            type="text"
            name="telefon"
            id="telefon"
            value={formData.telefon}
            onChange={handleChange}
            className="border border-black p-2 text-[16px]"
          />

          <label htmlFor="message">Nachricht</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            cols="50"
            className="resize-none border border-black bg-transparent p-2 hover:resize"
          ></textarea>
        </form>
        <div className="flex justify-center">
          <button
            onClick={submitForm}
            type="submit"
            className="mt-10 flex items-center  justify-center  rounded-xl border border-black bg-white px-6 py-4 text-black transition duration-300 hover:bg-[#f3f3f3]"
          >
            Sended
            <IoMdMail className="ml-2 text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
