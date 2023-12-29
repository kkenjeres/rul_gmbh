"use client";
import React, { useState } from "react";

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
    <div className="mx-auto flex w-[80%] h-[500px] flex-col rounded-xl  bg-[#F5F5F7]">
      <form onSubmit={submitForm} className="flex flex-col w-[80%] h-[80%] m-auto">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-black"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="companyName">Company</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
